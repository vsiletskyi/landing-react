import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import Social from './components/Social/Social'
import Features from './components/Features/Features'
import FeaturesDesign from './components/FeaturesDesign/FeaturesDesign'
import FeaturesConvenience from './components/FeaturesConvenience/FeaturesConvenience'
import Pricing from './components/Pricing/Pricing'

import './App.css'
import Questions from './components/Questions/Questions'

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
        <Pricing />
        <Questions />
      </div>
    </div>
  )
}

export default App
