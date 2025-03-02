import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import Social from './components/Social/Social'
import Features from './components/Features/Features'
import FeaturesDesign from './components/FeaturesDesign/FeaturesDesign'
import FeaturesDesignList from './components/FeaturesDesignList/FeaturesDesignList'
import FeaturesConvenienceList from './components/FeaturesConvenienceList/FeaturesConvenienceList'

import img1 from './assets/img/unsplash_rAtzDB6hWrU.svg'
import img2 from './assets/img/hero-img.svg'

import './App.css'

function App() {

  return (
    <div className='layout'>
      <Header />
      <div className='content'>
        <HeroSection />
        <Social />
        <Features />
        <FeaturesDesign
          reverseOrder={false}
          textTop='High quality images'
          tittle='For designers, by designers'
          textBottom='Unleash boundless creativity with a large repository of images optimized for designers'
          img={img1}
        >
          <FeaturesDesignList />  
        </FeaturesDesign>
        <FeaturesDesign
          reverseOrder={true}
          textTop='Best-in-class support'
          tittle='Convenience and licensing that empowers'
          textBottom='In a world where storytelling constantly evolves, dont let licensing and poor support hold you down.'
          img={img2}
        >
          <FeaturesConvenienceList />
        </FeaturesDesign>
      </div>
    </div>
  )
}

export default App
