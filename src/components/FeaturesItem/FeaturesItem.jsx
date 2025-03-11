import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './FeaturesItem.module.css'

const FeaturesItem = ({ item, variant}) => {
  
  const featureItemClass = classNames(styles.featuresItem, {
    [styles[variant]]: variant,
  });

    return (
      <div className={featureItemClass}>
        <div className={styles.imgWrapp}>
            <img src={item.img.src} alt={item.img.alt} />
        </div>
        <div className={styles.textWrapp}>
            <h4 className={styles.featuresTitle}>{item.title}</h4>
            <p className={styles.featuresText}>{item.text}</p>
        </div>          
      </div>
    )
}

FeaturesItem.propTypes = {
  item: PropTypes.object,
  variant: PropTypes.string
}
  
export default FeaturesItem