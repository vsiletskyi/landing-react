import FeaturesList from '../FeaturesList/FeaturesList'
import FeaturesTitle from '../FeaturesTitle/FeaturesTitle'

import styles from './Features.module.css'

const Features = () => {
  return (
    <div className={styles.container} id='features'>
      <FeaturesTitle
        textTop='Premium abstract images'
        tittle='Easy access to top quality images'
        textBottom='In a world where storytelling constantly evolves, we lead with groundbreaking images designed for your presentation excellence.'
      />
      <div className={styles.features}>
          <FeaturesList/>
      </div>
    </div>
  )
}

export default Features
