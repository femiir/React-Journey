import { useState } from 'react'
import reactLogo from './assets/react.svg'
import logo from './assets/logo.svg'
import './App.css'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App
