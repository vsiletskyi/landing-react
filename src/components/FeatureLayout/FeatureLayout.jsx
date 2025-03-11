import FeaturesDesignList from '../FeaturesDesignList/FeaturesDesignList'
import PropTypes from 'prop-types'

import styles from './FeatureLayout.module.css'

const FeatureLayout = ({ textTop, tittle, textBottom, img, reverseOrder, featuresList }) => {
    return (
      <div className={styles.container}>
          <div className={styles.header}>
            <p className={styles.textTop}>{textTop}</p>
            <h3>{tittle}</h3>
            <p className={styles.textBottom}>{textBottom}</p>
          </div>
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
