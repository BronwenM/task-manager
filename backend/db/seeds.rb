# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Create a set of 10 placeholder tasks to develop the Frontend on
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