import styles from '../../styles/service.module.scss'
import BtnPrimary from '../main/btnPrimary'

export default function Service({ title, description, pic }) {
  return (
    <div className={styles.Service}>
      <div className={styles.Service_content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.Services_actions}>
          <BtnPrimary name="Service Button" />
        </div>
      </div>
      <div className={styles.Service_image}>
        <img src={pic} alt="grey" />
      </div>
      <div className={styles.Services_actions}>
        <BtnPrimary name="Service Button" />
      </div>
    </div>
  )
}
