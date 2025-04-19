import Header from './Header'
import Sidebar from './Sidebar'
import RegisterForm from './RegisterForm'
import styles from './Dashboard.module.css'

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <Header />
      <div className={styles.mainLayout}>
        <Sidebar />
        <main className={styles.mainContent}>
          <h2>Dashboard Content</h2>
          <p>Here goes the rest of your content…</p>
          <RegisterForm />
        </main>
      </div>
    </div>
  )
}

export default Dashboard
