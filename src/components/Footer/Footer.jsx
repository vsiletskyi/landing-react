import Menu from '../Menu/Menu'
import { footerMenuList, socialList } from '../../const/listData'
import SocialMenu from '../SocialMenu/SocialMenu'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <Menu menuList={footerMenuList} footerMenu />
        <SocialMenu socialList={socialList}/>
        <p className={styles.copyright}>© 2024 Abstractly, Inc. All rights reserved.</p>
    </div>
  )
}

export default Footer
