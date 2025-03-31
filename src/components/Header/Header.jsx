import logo from '../../assets/img/Logo.png'
import { headerMenuList } from '../../const/listData'
import Menu from '../Menu/Menu'
import Button from '../Button/Button'

import styles from './Header.module.css'

const Header = () => {
  return (
      <header className={styles.header}>
        <div className={styles.container}>
          <a href='/'>
            <div className={styles.logoWrapper}>
              <img src={logo} alt="Logo" />
            </div>
          </a>
          <Menu menuList={headerMenuList} headerMenu/>
        </div>
        <div className={styles.buttons}>
          <Button text="Learn more" variant="light"/>
          <Button text="See pricing" variant="dark"/>
        </div>
      </header>
  )
}

export default Header
