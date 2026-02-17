import './App.css'
import { SideBarProvider } from './contexts/SideBarContext'
import { Home } from './pages/Home'

function App() {
  return (
    <>
    <SideBarProvider>
      <Home></Home>
    </SideBarProvider>
    </>
  )
}

export default App
