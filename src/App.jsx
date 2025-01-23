import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'

function App() {
  return (
    <div className='App'>
      <Hero 
        imgSrc={'https://picsum.photos/200/300?random=1'}
        imgAlt="Card Image"
        title="Card Title"
        description="This is the Card Description. You can add more details about the card Here."
        buttonText="Learn More"
        link="Card Page"
      />
    
      <Hero 
        imgSrc={'https://picsum.photos/200/300?random=2'}
        imgAlt="Card Image"
        title="Card Title"
        description="This is the Card Description. You can add more details about the card Here."
        buttonText="Learn More"
        link="Card Page"
      />
    </div>
  )
}

export default App
