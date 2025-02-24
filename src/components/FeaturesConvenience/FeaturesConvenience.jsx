import FeaturesConvenienceList from '../FeaturesConvenienceList/FeaturesConvenienceList'
import img from './../../assets/img/hero-img.svg'

import styles from './FeaturesConvenience.module.css'

const FeaturesConvenience = () => {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <p className={styles.textTop}>Best-in-class support</p>
            <h3>Convenience and licensing <br /> that empowers</h3>
            <p className={styles.textBottom}>In a world where storytelling constantly evolves,<br /> dont let licensing and poor support hold you down.</p>
        </div>
          <div className={styles.featuresWrapp}>
            <div className={styles.featuresImg}>
                <img src={img} alt="img" />
            </div> 
            <div className={styles.features}>
                <FeaturesConvenienceList />
            </div> 
        </div>  
    </div>
  )
}

export default FeaturesConvenience
