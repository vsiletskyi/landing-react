import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'

import './App.css'
import Social from './components/Social/Social'

function App() {

  return (
    <div className='layout'>
      <Header />
      <div className='content'>
        <HeroSection />
        <Social/>
      </div>
    </div>
  )
}

export default App
