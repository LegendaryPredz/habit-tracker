// components/NewHabitForm.tsx
import React, { useState } from 'react'

interface NewHabitFormProps {
  onSubmit: (habit: { name: string; description: string }) => void;
}

const NewHabitForm: React.FC<NewHabitFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ name, description })
    setName('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Habit name"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Add Habit</button>
    </form>
  )
}

export default NewHabitForm
