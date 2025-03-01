import { featuresConvenienceList } from '../../const/listData'
import FeatureLayout from '../../components/FeatureLayout'
import FeaturesWithImageWrapper from '../../components/FeaturesWithImageWrapper/FeaturesWithImageWrapper'
import img from './../../assets/img/hero-img.svg'

const FeaturesConvenience = () => {
  return (
    <FeatureLayout
        title="Convenience and licensing that empowers"
        textTop="Best-in-class support"
        textBottom="In a world where storytelling constantly evolves, dont let licensing and poor support hold you down."
    >
      <FeaturesWithImageWrapper img={img} imgAlign="left" listData={featuresConvenienceList} />
    </FeatureLayout>
  )
}

export default FeaturesConvenience
