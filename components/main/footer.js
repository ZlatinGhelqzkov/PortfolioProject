import styles from '../../styles/footer.module.scss'
import Logo from '../../assets/logos/LogoFooter.svg'
import Payment from '../../assets/logos/PaymentMethod.svg'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className="Shell">
        <div className={styles.Footer_inner}>
          <div className={styles.Footer_lists}>

            <div className={styles.Footer_list}>
              <h4>Information</h4>
              <ul>
                <li><a href="/">Server status</a></li>
                <li><a href="/">Affiliate Program</a></li>
                <li><a href="/">Reviews</a></li>
                <li><a href="/">Payment method</a></li>
              </ul>
            </div>

            <div className={styles.Footer_list}>
              <h4>Hosting</h4>
              <ul>
                <li><a href="/">Hosting</a></li>
                <li><a href="/">VPN Hosting</a></li>
                <li><a href="/">Cloud Server</a></li>
                <li><a href="/">WordPress Hosting</a></li>
                <li><a href="/">CMS hosting</a></li>
              </ul>
            </div>

            <div className={styles.Footer_list}>
              <h4>Domains</h4>
              <ul>
                <li><a href="/">Domain Transfer</a></li>
                <li><a href="/">Free Domain</a></li>
                <li><a href="/">Free XYZ Domain</a></li>
                <li><a href="/">Buy SSL</a></li>
                <li><a href="/">Domain Registration</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.Footer_actions}>
            <div className={styles.Footer_logo}>
              <img src={Logo} alt="Footer_Logo" />
            </div>
            <div className={styles.Footer_content}>
              <p>We help entrepreneurs taking their first steps online, business owners scaling up,
              large companies, and the partners who help them succeed.</p>
            </div>
            <div className={styles.Footer_payments}>
              <img src={Payment} alt="Footer_payments"/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Footer_social}>
        <div className="Shell">
          <div className={styles.Footer_social_inner}>
            <div className={styles.Social}>
              <h4>Get Social: </h4>
              <FaFacebookF />
              <FaInstagram />
              <FaYoutube />
              <FaTwitter />
            </div>
            <p>Host Rongo - Multipurpose WP Theme with Elementor Page Builder. © 2019 <a>Zemez</a>   inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
