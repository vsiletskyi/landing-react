import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './Menu.module.css'

const Menu = ({menuList, headerMenu, footerMenu}) => {
  return (
    <nav className={classNames(styles.nav, {
        [styles.headerMenu]: headerMenu,
        [styles.footerMenu]: footerMenu
    })}>
        <ul className={styles.menu}>
            {menuList.map((item, i) => {
                return <li key={i} className={styles.item}><a href={item.href}>{item.label}</a></li>
            })}  
        </ul>
    </nav>
  )
}

Menu.propTypes = {
    menuList: PropTypes.array,
    headerMenu: PropTypes.string,
    footerMenu: PropTypes.string
}

export default Menu
