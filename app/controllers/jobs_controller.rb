class JobsController < ApplicationController
  before_action :authorize_req, only: [:create, :update]
  before_action :set_job, only: [:show, :update]

  def index
    @jobs = Job.all
    render json: @jobs
  end

  def show
    render json: @job
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
    if @curr_job.job == @job && @job.update(job_params)
      render json: @job
    else
      render json: @job.errors, status: :unprocessable_entity
    end
  end

  private

  def set_job
    @job = Job.find(params[:id])
  end

  def job_params
    params.require(:job).permit(:company)
  end
end
