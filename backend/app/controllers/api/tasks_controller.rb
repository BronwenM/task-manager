class Api::TasksController < ApplicationController
  #GET /tasks
  def index
    tasks = Task.all.order(created_at: :desc)
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
    task = Task.new(
      title: params[:title],
      description: params[:description],
      due_date: params[:due_date],
      is_complete: params[:is_complete]
    )

    if task.save
      render json: { task: task, message: 'Task created successfully' }, status: :created
    else
      render json: { errors: task.errors.full_messaeges }, status: :unprocessable_entity
    end
  end

  #POST /tasks/delete
  def destroy
    task = Task.find_by(id: params[:id])

    if task
      task.destroy
      render json: {message: 'Task deleted successfully'}, status: :ok
    else
      render json: {message: 'Task not found'}, status: :not_found
    end

  end

  #PATCH/PUT /tasks/:id
  def update
    Rails.logger.info("Received parameters:\n#{JSON.pretty_generate(params.to_unsafe_h)}")

    task = Task.find_by(id: params[:id])

    render json: { message: 'Task not found' }, status: :not_found unless task

    if task
      task.update(title: params[:title], description: params[:description], due_date: params[:due_date])
    end

    render json: {task: task, message: 'Task successfully updated'}, status: :ok

  end

  private

  #Define accepted params from url
  def task_params
  end
end
