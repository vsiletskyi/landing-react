import FeatureLayout from "../FeatureLayout/FeatureLayout"
import img2 from '../../assets/img/hero-img.svg'

const FeaturesConvenience = () => {
  return (
      <FeatureLayout
        reverseOrder={true}
        textTop='Best-in-class support'
        tittle='Convenience and licensing that empowers'
        textBottom='In a world where storytelling constantly evolves, dont let licensing and poor support hold you down.'
        img={img2}
    />    
  )
}

export default FeaturesConvenience
