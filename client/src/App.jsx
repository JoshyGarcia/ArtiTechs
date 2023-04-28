import './App.css'
import Navbar from  "./components/Navbar"
import Events from "./components/Events"
import Footer from '../src/Footer.jsx'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <Navbar /> 
      <Events />
      <Footer />
    </div>
  )
}

export default App