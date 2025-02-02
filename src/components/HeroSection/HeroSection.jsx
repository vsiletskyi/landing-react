import HeroImage from '../HeroImage/HeroImage'
import HeroMessage from '../HeroMessage/HeroMessage'
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
