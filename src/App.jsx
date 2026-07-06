
import './App.css'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'

function App() {
  return (
    <main className="business-card">
      <Info />
      <div className="business-card-content">
        <About />
        <Interests />
      </div>
    </main>
  )
}

export default App
