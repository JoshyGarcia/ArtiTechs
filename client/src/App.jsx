import './App.css'
import Navbar from  "./components/Navbar"
import Events from "./components/Events"

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <Navbar /> 
      <Events />
    </div>
  )
}

export default App