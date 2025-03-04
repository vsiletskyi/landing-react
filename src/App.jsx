import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import Social from './components/Social/Social'
import FeaturesMain from './components/FeaturesMain/FeaturesMain'

import './App.css'

function App() {
  return (
    <div className='layout'>
      <Header />
      <div className='content'>
        <HeroSection />
        <Social />
        <FeaturesMain />
      </div>
    </div>
  )
}

export default App
