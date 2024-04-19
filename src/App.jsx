// App.js
import './App.css'
import CurrencyConverter from './components/CurrencyConverter'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex flex-col items-center justify-center">
      <div className="container mx-auto">
        <CurrencyConverter />
      </div>
    </div>
  )
}

export default App
