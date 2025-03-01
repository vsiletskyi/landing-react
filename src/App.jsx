import Header from './features/Header/Header'
import HeroSection from './features/HeroSection/HeroSection'
import Social from './features/Social/Social'
import Features from './features/Features/Features'
import FeaturesDesign from './features/FeaturesDesign/FeaturesDesign'

import './App.css'
import FeaturesConvenience from './features/FeaturesConvenience/FeaturesConvenience'

function App() {

  return (
    <div className='layout'>
      <Header />
      <div className='content'>
        <HeroSection />
        <Social />
        <Features />
        <FeaturesDesign />
        <FeaturesConvenience />
      </div>
    </div>
  )
}

export default App
