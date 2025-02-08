import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'

import './App.css'

function App() {

  return (
    <div className='layout'>
      <Header />
      <div className='content'>
        <HeroSection/>
      </div>
    </div>
  )
}

export default App
