import ContactInfo from '../ContactInfo/ContactInfo'
import ContactForm from '../ContactForm/ContactForm'
import { contactList } from '../../const/listData'

import styles from './Contact.module.css'

const Contact = () => {
  return (
    <div className={styles.container} id='contact'>
      <div className={styles.infoWrap}>
        <ContactInfo 
            title = "Talk to our team"
            description = "We're committed to delivering the support you require to make your experience as smooth as possible."
            contactList = {contactList}
        />
      </div>
      <div className={styles.formWrap}>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact
