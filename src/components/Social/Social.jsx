import logo1 from './../../assets/img/Fictional-company-logo-1.png'
import logo2 from './../../assets/img/Fictional-company-logo-2.png'
import logo3 from './../../assets/img/Fictional-company-logo-3.png'
import logo4 from './../../assets/img/Fictional-company-logo-4.png'
import logo5 from './../../assets/img/Fictional-company-logo-5.png'
import logo6 from './../../assets/img/Fictional-company-logo-6.png'

import styles from './Social.module.css'

const socialList = [
    { src: logo1, alt: 'logo1' },
    { src: logo2, alt: 'logo2' },
    { src: logo3, alt: 'logo3' },
    { src: logo4, alt: 'logo4' },
    { src: logo5, alt: 'logo5' },
    { src: logo6, alt: 'logo6' },
]

const Social = () => {
  return (
    <div className={styles.socialSection}>
          <p className={styles.text}>Used by teams that you love</p>
          <ul className={styles.socials}>
              {socialList.map((item, i)=>{
                  return <li key={i} className={styles.social}><img src={item.src} alt={item.alt} /></li>
              })}
          </ul>
    </div>
  )
}

export default Social
