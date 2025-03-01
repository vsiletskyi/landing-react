import { featuresDesignList } from '../../const/listData'
import FeatureLayout from '../../components/FeatureLayout'
import FeaturesWithImageWrapper from '../../components/FeaturesWithImageWrapper/FeaturesWithImageWrapper'
import img from './../../assets/img/unsplash_rAtzDB6hWrU.svg'

const FeaturesDesign = () => {
  return (
    <FeatureLayout
        title="For designers, by designers"
        textTop="High quality images"
        textBottom="Unleash boundless creativity with a large repository of images optimized for designers"
    >
      <FeaturesWithImageWrapper img={img} imgAlign="right" listData={featuresDesignList} />
    </FeatureLayout>
  )
}

export default FeaturesDesign
