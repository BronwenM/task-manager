class TaskGroupsController < ApplicationController

  #GET /task_groups
  def index
    task_groups = TaskGroup.all.order(created_at: :desc)
    render json: task_groups
  end

  #GET /task_groups/:id
  def show
    task_group = TaskGroup.find(params[:id])
    render json: task_group

    rescue ActiveRecord::RecordNotFound
      render json: {error: 'No task group found'}, status: :not_found
  end

  #POST /task_groups
  def create
    task_group = TaskGroup.new(
      name: params[:name],
      user_id: params[:user_id],
      color: if color ? params[:color] : nil,
      icon: if icon ? params[:icon] : nil
    )

    if task_group.save
      render json: { task_group: task_group, message: 'Task group created successfully' }, status: :created
    else
      render json: { errors: task_group.errors.full_messaeges }, status: :unprocessable_entity
    end
  end

  #POST /task_groups/delete
  def destroy
    task_group = TaskGroup.find_by(id: params[:id])

    if task_group
      task_group.destroy
      render json: {message: 'Task group deleted successfully'}, status: :ok
    else
      render json: {message: 'Task group not found'}, status: :not_found
    end

  end

  #PATCH/PUT /task_groups/:id
  # Adding task to group is handled in the TasksController, as it requires updating the task's task_group_id rather than modifying the task group itself
  def update
    Rails.logger.info("Received parameters:\n#{JSON.pretty_generate(params.to_unsafe_h)}")

    task_group = TaskGroup.find_by(id: params[:id])

    render json: { message: 'Task group not found' }, status: :not_found unless task_group

    if task_group
      task_group.update(name: params[:name], color: params[:color], icon: params[:icon])
    end

    render json: {task_group: task_group, message: 'Task group successfully updated'}, status: :ok

  end

  private

  # Only allow a list of trusted parameters through.
  def task_group_params
    params.require(:task_group).permit(:name, :user_id, :color, :icon)
  end

end
