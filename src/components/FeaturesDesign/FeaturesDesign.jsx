import FeaturesDesignList from '../FeaturesDesignList/FeaturesDesignList'
import img from './../../assets/img/unsplash_rAtzDB6hWrU.svg'

import styles from './FeaturesDesign.module.css'

const FeaturesDesign = () => {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <p className={styles.textTop}>High quality images</p>
            <h3>For designers, by designers</h3>
            <p className={styles.textBottom}>Unleash boundless creativity with a large repository of images optimized for designers</p>
        </div>
        <div className={styles.featuresWrapp}>
            <div className={styles.features}>
                  <FeaturesDesignList />
            </div>
            <div className={styles.featuresImg}>
                <img src={img} alt="img" />
            </div>  
        </div>  
    </div>
  )
}

export default FeaturesDesign
