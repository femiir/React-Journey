import { useState } from 'react'
import Main from './components/Main.jsx'
import Header from './components/Header.jsx'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  )
}

export default App
