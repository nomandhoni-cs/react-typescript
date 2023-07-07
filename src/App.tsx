import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-screen-xl py-2 lg:py-4">
        <Outlet />
      </div>
    </>

  )
}

export default App
