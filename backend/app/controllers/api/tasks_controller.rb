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
    task = Task.new(
      title: title,
      description: description,
      due_date: due_date,
      is_complete: is_complete
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
    task = Task.find_by(id: params[:id])

    render json: { message: 'Task not found' }, status: :not_found unless task

    

  end

  private

  #Define accepted params from url
  def task_params
  end
end
