import PropTypes from 'prop-types'

import styles from './FeaturesDesign.module.css'

const FeaturesDesign = ({textTop, tittle, textBottom, img, reverseOrder, children}) => {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
        <p className={styles.textTop}>{textTop}</p>
        <h3>{tittle}</h3>
        <p className={styles.textBottom}>{textBottom}</p>
        </div>
        <div className={`${styles.featuresWrapp} ${reverseOrder ? styles.reverse : ''}`}>
            <div className={styles.features}>
                {children}
            </div>
            <div className={styles.featuresImg}>
                <img src={img} alt="img" />
            </div>  
        </div>  
    </div>
  )
}

FeaturesDesign.propTypes = {
  textTop: PropTypes.string,
  tittle: PropTypes.string,
  textBottom: PropTypes.string,
  img: PropTypes.object,
  reverseOrder: PropTypes.bool,
  children: PropTypes.object
}

export default FeaturesDesign
