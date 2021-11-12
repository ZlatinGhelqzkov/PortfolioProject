import styles from '../styles/subscribeBlock.module.scss'
import backgroundsubscribe from '../assets/backgrounds/background_subscribe.png'
import BtnPrimary from '../components/main/btnPrimary'

export default function SubscribeBlock(){
  return(
    <section className="Section">
      <div className={styles.Subscribe_background} style={{ backgroundImage: 'url('+backgroundsubscribe+')' }}>
        <div className="Shell">
          <div className="Section_body">
            <div className={styles.Subscribe_inner}>
              <div className={styles.Subscribe_content}>
                <h4>Stay in Touch</h4>
                <p>Subscribe to our newsletters, special offers, etc.</p>
              </div>
              <div className={styles.Subscribe_action}>
                <div className={styles.Action_input}>
                <label>
                  <input type="email"/>
                  <label>Enter Your Email</label>
                </label>
                </div>
                <BtnPrimary name="Subscribe" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  )
}
