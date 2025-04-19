import { AppProvider } from './context/AppContext'
import Dashboard from './components/Dashboard'

const App = () => (
  <AppProvider>
    <Dashboard />
  </AppProvider>
)

export default App
