import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import Social from './components/Social/Social'
import Features from './components/Features/Features'
import FeaturesDesign from './components/FeaturesDesign/FeaturesDesign'
import FeaturesConvenience from './components/FeaturesConvenience/FeaturesConvenience'
import Pricing from './components/Pricing/Pricing'
import Questions from './components/Questions/Questions'
import NewsLetter from './components/NewsLetter/NewsLetter'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

import './App.css'

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
        <NewsLetter />
        <Contact />
        <Footer/>
      </div>
    </div>
  )
}

export default App
