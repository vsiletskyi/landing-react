import styles from './Header.module.css'
import logo from '../../assets/img/Logo.png'
import HeaderMenu from '../HeaderMenu/HeaderMenu'
import {NavLink} from 'react-router-dom'
import Button from '../Button/Button'

const Header = () => {
  return (
      <header className={styles.header}>
        <div className={styles.container}>
          <NavLink to='/'>
            <div className={styles.header__logo}>
              <img src={logo} alt="Logo" />
            </div>
          </NavLink>
          <HeaderMenu/>
        </div>
        <div className={styles.header__buttons}>
          <Button text="Learn more" variant="light"/>
          <Button text="See pricing" variant="dark"/>
        </div>
      </header>
  )
}

export default Header
