import Events from "./components/Events"
import Footer from '../src/Footer.jsx'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <Events />
      <Footer />
    </div>
  )
}

export default App
