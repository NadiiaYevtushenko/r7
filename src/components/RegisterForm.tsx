import { useContext, useState, FormEvent } from 'react'
import { AppContext } from '../context/AppContext'
import styles from './RegisterForm.module.css'

const RegisterForm = () => {
  const { setUsername } = useContext(AppContext)
  const [nameInput, setNameInput] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (nameInput.trim()) {
      setUsername(nameInput.trim())
      setNameInput('')
    }
  }

  return (
    <form className={styles.registerForm} onSubmit={handleSubmit}>
      <label htmlFor="username">Enter your name:</label>
      <input
        type="text"
        id="username"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
        placeholder="Your full name"
      />
      <button type="submit">Register</button>
    </form>
  )
}

export default RegisterForm
