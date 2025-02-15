# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
puts "Creating tasks..."

Task.create!([
  { title: 'Buy groceries', description: 'Get ingredients for dinner', due_date: '2025-02-20' },
  { title: 'Finish project report', description: 'Complete the final section of the report', due_date: '2025-02-18' },
  { title: 'Call John', description: 'Discuss the new project updates with John', due_date: '2025-02-15' },
  { title: 'Clean the house', description: 'Vacuum and mop the floors', due_date: '2025-02-17' },
  { title: 'Prepare for meeting', description: 'Prepare slides for the client meeting', due_date: '2025-02-19' },
  { title: 'Exercise', description: 'Go for a 30-minute jog in the park', due_date: '2025-02-16' },
  { title: 'Send invoice to client', description: 'Email the invoice for the last project', due_date: '2025-02-14' },
  { title: 'Read chapter 5', description: 'Finish reading chapter 5 of the book', due_date: '2025-02-21' },
  { title: 'Organize desk', description: 'Sort through paperwork and tidy up workspace', due_date: '2025-02-22' },
  { title: 'Plan weekend trip', description: 'Research and book a weekend getaway', due_date: '2025-02-23' }
])

puts "Tasks created!"