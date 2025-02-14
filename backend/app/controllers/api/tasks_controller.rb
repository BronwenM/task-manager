class Api::TasksController < ApplicationController

  #GET /tasks
  def index
    tasks = Task.all
    render json: tasks
  end

  #GET /tasks/:id
  def show
    task = Task.find(params[:id])
    render json: task

    rescue ActiveRecord::RecordNotFound
      render json: {error: 'No task found'}, status: :not_found
  end

  #POST /tasks
  def create
  end

  #POST /tasks/delete
  def destroy
  end

  #PATCH/PUT /tasks/:id
  def update
  end

  private

  #Define accepted params from url
  def task_params
  end
end
