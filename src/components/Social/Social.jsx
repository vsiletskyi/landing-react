import Marquee from "react-fast-marquee"
import logo1 from './../../assets/img/Fictional-company-logo-1.svg'
import logo2 from './../../assets/img/Fictional-company-logo-2.svg'
import logo3 from './../../assets/img/Fictional-company-logo-3.svg'
import logo4 from './../../assets/img/Fictional-company-logo-4.svg'
import logo5 from './../../assets/img/Fictional-company-logo-5.svg'
import logo6 from './../../assets/img/Fictional-company-logo-6.svg'

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
          <Marquee>
            <ul className={styles.socials}>
              {socialList.map((item, i)=>{
                  return <li key={i} className={styles.social}><img src={item.src} alt={item.alt} /></li>
              })}
            </ul>
          </Marquee>
    </div>
  )
}

export default Social
