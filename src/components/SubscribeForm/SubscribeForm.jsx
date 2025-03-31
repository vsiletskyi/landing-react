import Button from '../Button/Button'

import styles from './SubscribeForm.module.css'

const SubscribeForm = () => {
  return (
    <form className={styles.form}>
      <input
        type="email"
        placeholder="Enter your email"
        required
        className={styles.input}
      />
      <Button text='Subscribe' variant='dark'/>
    </form>
  )
}

export default SubscribeForm
