# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

puts "Seeding database with initial data..."

puts "Creating users..."
User.create!([
  { username: 'Bronwen M.', email: 'bm@email.ca', password: 'password' },
  { username: 'Bob', email: 'bob@email.ca', password: 'password' },
  { username: 'Charlie', email: 'charlie@email.ca', password: 'password' }
])
puts "Users created!"

puts "Creating task groups..."
TaskGroup.create!([
  { name: 'Work', user_id: 1, color: 'blue', icon: 'briefcase' },
  { name: 'Personal', user_id: 1, color: 'green', icon: 'home' },
  { name: 'Fitness', user_id: 1, color: 'red', icon: 'dumbbell' },
  { name: 'Hobbies', user_id: 1, color: 'purple', icon: 'paint-brush' },
  { name: 'Errands', user_id: 1, color: 'orange', icon: 'shopping-cart' }
])
puts "Task groups created!"

puts "Creating tasks..."
Task.create!([
  { title: 'Buy groceries', description: 'Get ingredients for dinner', due_date: rand(1.day.from_now...5.weeks.from_now), priority: 'high', tags: ['shopping', 'food'], user_id: 1, task_group_id: 2 },
  { title: 'Finish project report', description: 'Complete the final section of the report', due_date: rand(1.day.from_now...5.weeks.from_now), user_id: 1, priority: 'medium', tags: ['work', 'report'], task_group_id: 1 },
  { title: 'Call John', description: 'Discuss the new project updates with John', due_date: rand(1.day.from_now...5.weeks.from_now), user_id: 1, priority: 'low', tags: ['communication'], task_group_id: 1 },
  { title: 'Clean the house', description: 'Vacuum and mop the floors', due_date: rand(1.day.from_now...5.weeks.from_now), user_id: 1, priority: 'medium', tags: ['housework'], task_group_id: 2},
  { title: 'Prepare for meeting', description: 'Prepare slides for the client meeting', due_date: rand(1.day.from_now...5.weeks.from_now), user_id: 1, priority: 'high', tags: ['work'], task_group_id: 1 },
  { title: 'Exercise', description: 'Go for a 30-minute jog in the park', due_date: rand(1.day.from_now...5.weeks.from_now), user_id: 1, priority: 'low', tags: ['fitness'], task_group_id: 1  },
  { title: 'Send invoice to client', description: 'Email the invoice for the last project', due_date: rand(1.day.from_now...5.weeks.from_now), user_id: 1, priority: 'high', tags: ['work'], task_group_id: 1  },
  { title: 'Read chapter 5', description: 'Finish reading chapter 5 of the book', due_date: rand(1.day.from_now...5.weeks.from_now), user_id: 1, priority: 'medium', tags: ['education'], task_group_id: 1  },
  { title: 'Organize desk', description: 'Sort through paperwork and tidy up workspace', due_date: rand(1.day.from_now...5.weeks.from_now), user_id: 1, priority: 'low', tags: ['housework'], task_group_id: 1  },
  { title: 'Plan weekend trip', description: 'Research and book a weekend getaway', due_date: rand(1.day.from_now...5.weeks.from_now), user_id: 1, priority: 'medium', tags: ['travel'], task_group_id: 1  }
])
puts "Tasks created!"

puts "Database seeding completed!"