class ToolsController < ApplicationController
  before_action :authorize_request, only: [:create, :destroy]
  before_action :set_tool, only: [:show, :destroy]

  def index
    @tools = Tool.all
    render json: @tools
  end

  def show
    render json: @tool
  end

  def create
    @tool = Tool.new(tool_params)
    @tool.creator = @curr_user

    if @tool.save
      @curr_user.tools << @tool
      render json: @tool, status: :created
    else
      render json: @food.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if @tool.creator == @curr_user
      @tool.destroy
    end
  end

  private

  def set_tool
    @tool = Tool.find(params[:id])
  end

  def tool_params
    params.require(:tool).permit(:name)
  end
end
