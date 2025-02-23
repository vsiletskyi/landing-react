import FeaturesList from '../FeaturesList/FeaturesList'

import styles from './Features.module.css'

const Features = () => {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.textTop}>Premium abstract images</p>
          <h3>Easy access to top quality images</h3>
          <p className={styles.textBottom}>In a world where storytelling constantly evolves, we lead with groundbreaking images designed for your presentation excellence.</p>
        </div>
        <div className={styles.features}>
            <FeaturesList/>
        </div>
    </div>
  )
}

export default Features
