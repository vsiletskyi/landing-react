import styles from './HeaderMenu.module.css'
import { NavLink } from 'react-router-dom'

const menuList = ['Home', 'Features', 'Pricing', 'About us', 'Contact']

const HeaderMenu = () => {
  return (
    <nav>
        <ul className={styles.header__menu}>
              {menuList.map((item, i) => {
                return <li key={i} className={styles.menu__item}><NavLink to='#'>{item}</NavLink></li>
            })}  
        </ul>
    </nav>
  )
}

export default HeaderMenu
