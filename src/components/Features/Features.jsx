import logo1 from './../../assets/img/Thumbnail Icons 1.svg'
import logo2 from './../../assets/img/Thumbnail Icons 2.svg'
import logo3 from './../../assets/img/Thumbnail Icons 3.svg'
import logo4 from './../../assets/img/Thumbnail Icons 4.svg'
import logo5 from './../../assets/img/Thumbnail Icons 5.svg'
import logo6 from './../../assets/img/Thumbnail Icons 6.svg'

import styles from './Features.module.css'

const featuresList = [
  {
    img: {src: logo1, alt: 'logo1'},
    title: "Infinite Download",
    text: "Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more."
  },
  {
    img: {src: logo2, alt: 'logo2'},
    title: "Purely Handcrafted",
    text: "No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust."
  },
  {
    img: {src: logo3, alt: 'logo3'},
    title: "All Are Under licensed",
    text: "The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper)."
  },
  {
    img: {src: logo4, alt: 'logo4'},
    title: "Cancel Anytime",
    text: "Subscribe at your own pace, and cancel when you feel it's enough."
  },
  {
    img: {src: logo5, alt: 'logo5'},
    title: "Empowering For Team",
    text: "We support multiple seats at once, requiring only a single payment."
  },
  {
    img: {src: logo6, alt: 'logo6'},
    title: "No Limitations",
    text: "Use as many as you want, from Dribbble presentations to PowerPoint presentations."
  },
]

const Features = () => {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.textTop}>Premium abstract images</p>
          <h3>Easy access to top quality images</h3>
          <p className={styles.textBottom}>In a world where storytelling constantly evolves, we lead with groundbreaking images designed for your presentation excellence.</p>
        </div>
        <div className={styles.features}>
            {featuresList.map((item, i) => {
              return <div key={i} className={styles.featuresItem}>
                <img src={item.img.src} alt={item.img.alt} />
                <h4 className={styles.featuresTitle}>{item.title}</h4>
                <p className={styles.featuresText}>{item.text}</p>
              </div>
            })}
        </div>
    </div>
  )
}

export default Features
