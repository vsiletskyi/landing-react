import styles from './HeroMessage.module.css'
import Button from '../Button/Button'

const HeroMessage = () => {
  return (
    <div className={styles.heroMessage}>
          <h1 className={styles.title}>Well crafted abstract images</h1>
          <p className={styles.text}>High quality abstract images for your projects, wallpaper and presentations.</p>
          <div className={styles.buttons}>
            <Button text="Learn more" variant="light" className={styles.btnBig}/>
            <Button text="See pricing" variant="dark" className={styles.btnBig}/>
        </div>
    </div>
  )
}

export default HeroMessage
