import FeaturesDesignList from '../FeaturesDesignList/FeaturesDesignList'
import FeaturesTitle from '../FeaturesTitle/FeaturesTitle'
import PropTypes from 'prop-types'

import styles from './FeatureLayout.module.css'

const FeatureLayout = ({ textTop, tittle, textBottom, img, reverseOrder, featuresList }) => {
    return (
      <div className={styles.container}>
            <FeaturesTitle textTop={textTop} tittle={tittle} textBottom={textBottom}/>
          <div className={`${styles.featuresWrapp} ${reverseOrder ? styles.reverse : ''}`}>
            <FeaturesDesignList data={featuresList} />               
            <div className={styles.featuresImg}>
                <img src={img} alt="img" />
            </div>
          </div>
      </div>
  )
}

FeatureLayout.propTypes = {
    textTop: PropTypes.string,
    tittle: PropTypes.string,
    textBottom: PropTypes.string,
    img: PropTypes.string,
    reverseOrder: PropTypes.bool,
    featuresList: PropTypes.array
}

export default FeatureLayout
