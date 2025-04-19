import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import styles from './Sidebar.module.css'

const Sidebar = () => {
  const { username } = useContext(AppContext)

  return (
    <aside className={styles.sidebar}>
      <p>Logged in as: <strong>{username}</strong></p>
      <ul>
        <li>🏠 Home</li>
        <li>⚙️ Settings</li>
        <li>📄 Reports</li>
      </ul>
    </aside>
  )
}

export default Sidebar
