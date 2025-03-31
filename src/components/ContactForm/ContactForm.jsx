import Button from '../Button/Button'

import styles from './ContactForm.module.css'

const ContactForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.inputsWrap}>
        <div className={styles.inputWrap}>
            <label htmlFor="inputName">Name</label>
            <input
                type="text"
                placeholder="Your name"
                required
                className={styles.input}
                id="inputName"
            />
        </div>
        <div className={styles.inputWrap}>
            <label htmlFor="inputEmail">Email</label>
            <input
                type="email"
                placeholder="example@example.com"
                required
                className={styles.input}
                id="inputEmail"
            />
        </div>
      </div>
      <div className={styles.textareaWrap}>
        <div className={styles.inputWrap}>
            <label htmlFor="inputMessage">Message</label>
            <textarea name="message" id="inputMessage" className={styles.textarea} placeholder="Write your message..." rows='6'></textarea>
        </div>
        <p>0/500</p>
      </div>
      <Button text='Submit' variant='dark' className='big'/>
    </form>
  )
}

export default ContactForm
