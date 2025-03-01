import HeroImage from './components/HeroImage/HeroImage'
import HeroMessage from './components/HeroMessage/HeroMessage'

import styles from './HeroSection.module.css'

const HeroSection = () => {
  return (
    <div className={styles.hero}>
          <HeroMessage />
          <HeroImage/>
    </div>
  )
}

export default HeroSection
