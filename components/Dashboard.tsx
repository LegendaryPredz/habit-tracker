// components/Dashboard.tsx
import React from 'react'

interface Habit {
  id: string;
  name: string;
  description: string;
}

interface DashboardProps {
  habits: Habit[];
}

const Dashboard: React.FC<DashboardProps> = ({ habits }) => {
  return (
    <div>
      <h1>Your Habits</h1>
      {habits.map(habit => (
        <div key={habit.id}>
          <h2>{habit.name}</h2>
          <p>{habit.description}</p>
          {/* Add tracking interface here */}
        </div>
      ))}
    </div>
  )
}

export default Dashboard
