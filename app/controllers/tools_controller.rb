class ToolsController < ApplicationController
  before_action :authorize_req, only: [:create, :destroy]
  before_action :set_tool, only: [:show, :destroy]

  def index
    @tools = Tool.all
    render json: @tools
  end

  def show
    render json: @tool, include: :creator
  end

  def create
    @tool = Tool.new(tool_params)
    @tool.creator = @curr_user

    if @tool.save
      @curr_user.tools << @tool
      @curr_user.save
      render json: @tool, status: :created
    else
      render json: @tool.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if @tool.creator == @curr_user
      tool_users = @tool.users.select { |user| user.id != @curr_user.id }
      if tool_users.empty? && @tool.jobs.empty?
        @tool.destroy
        render json: {destroyed: true}, status: :accepted
      else
        render json: {destroyed: false}, status: :ok
      end
    end
  end

  private

  def set_tool
    @tool = Tool.find(params[:id])
  end

  def tool_params
    params.require(:tool).permit(:name, :description)
  end
end
