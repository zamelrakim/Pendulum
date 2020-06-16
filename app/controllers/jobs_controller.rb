class JobsController < ApplicationController
  before_action :authorize_req, only: [:create, :update, :employ]
  before_action :set_job, only: [:show, :update, :employ]

  def index
    @jobs = Job.all
    render json: @jobs
  end

  def show
    render json: @job, include: [:tools, :engineers]
  end

  def create
    @job = Job.new(job_params)
    if @job.save
      @curr_user.job = @job
      @curr_user.save
      render json: @job, status: :created
    else
      render json: @job.errors, status: :unprocessable_entity
    end
  end

  def update
    if @curr_user.job == @job
      tools = job_params[:tools]
      arrTools = tools.map { |tool| tool[:id] }
      @job.tool_ids=(arrTools)
      @job.save
      render json: @job
    else
      render json: @job.errors, status: :unprocessable_entity
    end
  end

  def employ
    @curr_user.job = @job
    @curr_user.save
  end

  def latest
    @job = Job.last
    render json: @job, status: :ok
  end

  private

  def set_job
    @job = Job.find(params[:id])
  end

  def job_params
    params.require(:job).permit(:id, :company, :description, tools: [ :id ])
  end
end
