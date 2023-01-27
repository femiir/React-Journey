import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import data from './data'


function App() {
  const [count, setCount] = useState(0)

  const cards = data.map((item) => {


    return <Card
      key={item.id}
      {...item}
    />
  })

  return (
    <div className="App">
      <Header />
      <Hero />
      <section className='card--list'>
        {cards}
      </section>

    </div>
  )
}

export default App
