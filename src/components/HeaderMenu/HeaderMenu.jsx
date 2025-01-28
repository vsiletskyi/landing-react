import styles from './HeaderMenu.module.css'

const menuList = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About us', href: '/about' },
    { label: 'Contact', href: '/contact' }
]

const HeaderMenu = () => {
  return (
    <nav>
        <ul className={styles.header__menu}>
              {menuList.map((item, i) => {
                return <li key={i} className={styles.menu__item}><a href={item.href}>{item.label}</a></li>
            })}  
        </ul>
    </nav>
  )
}

export default HeaderMenu
