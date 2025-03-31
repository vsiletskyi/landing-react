import PropTypes from 'prop-types'

import styles from './ContactInfo.module.css'

const ContactInfo = ({title, description, contactList}) => {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.desc}>{description}</p>
      <ul className={styles.contactList}>
        {
          contactList.map((item, i) => {
            return(
                <li key={i}>
                    <img src={item.img.src} alt={item.img.alt} />
                    {item.desc}
                </li>
            )
          })
        }
      </ul>
    </div>
  )
}

ContactInfo.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    contactList: PropTypes.array
}

export default ContactInfo
