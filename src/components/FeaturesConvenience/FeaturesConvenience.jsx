import FeatureLayout from "../FeatureLayout/FeatureLayout"
import img2 from '../../assets/img/hero-img.svg'
import { featuresList2 } from "../../const/listData"

const FeaturesConvenience = () => {
  return (
      <FeatureLayout
        reverseOrder={true}
        textTop='Best-in-class support'
        tittle='Convenience and licensing that empowers'
        textBottom='In a world where storytelling constantly evolves, dont let licensing and poor support hold you down.'
        img={img2}
        featuresList={featuresList2}  
    />    
  )
}

export default FeaturesConvenience
