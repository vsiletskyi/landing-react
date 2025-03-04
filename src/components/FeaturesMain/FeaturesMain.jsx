import Features from "../Features/Features"
import FeaturesDesign from "../FeaturesDesign/FeaturesDesign"
import FeaturesDesignList from "../FeaturesDesignList/FeaturesDesignList"
import {featuresList, featuresList2} from '../../const/listData'

import img1 from '../../assets/img/unsplash_rAtzDB6hWrU.svg'
import img2 from '../../assets/img/hero-img.svg'

const FeaturesMain = () => {
  return (
    <>
      <Features />
        <FeaturesDesign
          reverseOrder={false}
          textTop='High quality images'
          tittle='For designers, by designers'
          textBottom='Unleash boundless creativity with a large repository of images optimized for designers'
          img={img1}
        >
          <FeaturesDesignList data={featuresList} />  
        </FeaturesDesign>
        <FeaturesDesign
          reverseOrder={true}
          textTop='Best-in-class support'
          tittle='Convenience and licensing that empowers'
          textBottom='In a world where storytelling constantly evolves, dont let licensing and poor support hold you down.'
          img={img2}
        >
          <FeaturesDesignList data={featuresList2} />
        </FeaturesDesign>
    </>
  )
}

export default FeaturesMain
