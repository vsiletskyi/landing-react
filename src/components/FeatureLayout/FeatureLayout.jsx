import FeaturesDesignList from '../FeaturesDesignList/FeaturesDesignList'
import PropTypes from 'prop-types'
import { featuresList, featuresList2 } from '../../const/listData'

import styles from './FeatureLayout.module.css'

const FeatureLayout = ({ textTop, tittle, textBottom, img, reverseOrder }) => {
    return (
      <div className={styles.container}>
          <div className={styles.header}>
          <p className={styles.textTop}>{textTop}</p>
          <h3>{tittle}</h3>
          <p className={styles.textBottom}>{textBottom}</p>
          </div>
          <div className={`${styles.featuresWrapp} ${reverseOrder ? styles.reverse : ''}`}>
                <div className={styles.features}>
                    {!reverseOrder ? <FeaturesDesignList data={featuresList} /> : <FeaturesDesignList data={featuresList2} /> }
                  
              </div>
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
  }

export default FeatureLayout
