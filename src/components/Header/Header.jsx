import styles from './Header.module.css'
import logo from '../../assets/img/Logo.png'
import HeaderMenu from '../HeaderMenu/HeaderMenu'
import Button from '../Button/Button'

const Header = () => {
  return (
      <header className={styles.header}>
        <div className={styles.container}>
          <a href='/'>
            <div className={styles.logoWrapper}>
              <img src={logo} alt="Logo" />
            </div>
          </a>
          <HeaderMenu/>
        </div>
        <div className={styles.buttons}>
          <Button text="Learn more" variant="light"/>
          <Button text="See pricing" variant="dark"/>
        </div>
      </header>
  )
}

export default Header
