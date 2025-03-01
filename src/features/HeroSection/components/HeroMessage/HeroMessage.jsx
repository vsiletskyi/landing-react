import Button from '../../../../components/shared/Button/Button'
import styles from './HeroMessage.module.css'

const HeroMessage = () => {
  return (
    <div className={styles.heroMessage}>
          <div>
            <h1 className={styles.title}>Well crafted abstract images</h1>
            <p className={styles.text}>High quality abstract images for your projects, wallpaper and presentations.</p>
          </div>
          <div className={styles.buttons}>
            <Button text="Learn more" variant="light" type="big"/>
            <Button text="See pricing" variant="dark" type="big"/>
        </div>
    </div>
  )
}

export default HeroMessage
