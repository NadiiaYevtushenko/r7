import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import styles from './Header.module.css'

const Header = () => {
  const { username } = useContext(AppContext)

  return (
    <header className={styles.header}>
      <h1>Welcome, {username}!</h1>
    </header>
  )
}

export default Header
