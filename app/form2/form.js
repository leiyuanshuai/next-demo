'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { createToDo } from './actions';

const initialState = {
  message: '',
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button type="submit" aria-disabled={pending} className='btn'>
      {pending ? 'Adding' : 'Add'}
    </button>
  )
}

export default function AddToDoForm() {
  const [state, formAction] = useFormState(createToDo, initialState)
  console.log('state', state)
  return (
    <form action={formAction}>
      <input type="text" name="todo"  className='inp'/>
      <SubmitButton />
      <p className='msg'>
        {state?.message}
      </p>
    </form>
  )
}
