import FeatureLayout from '../FeatureLayout/FeatureLayout'
import img1 from '../../assets/img/unsplash_rAtzDB6hWrU.svg'

const FeaturesDesign = () => {
  return (
    <FeatureLayout
      reverseOrder={false}
      textTop='High quality images'
      tittle='For designers, by designers'
      textBottom='Unleash boundless creativity with a large repository of images optimized for designers'
      img={img1}
    />  
  )
}

export default FeaturesDesign
