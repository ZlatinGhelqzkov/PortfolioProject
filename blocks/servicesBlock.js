import styles from '../styles/services.module.scss'
import Service from '../components/secondary/service'
import thefour from '../assets/products/product1.png'

function ServicesBlock() {
  return (
    <section className="Section">
      <div className="Shell">
        <div className="Section_head">
          <h2>Services</h2>
          <p>We are the best at what we do.</p>
        </div>
        <div className="Section_body">
          <div className={styles.Services}>
            <Service pic={thefour} title="Title" description="Description" />
            <Service pic={thefour} title="Title" description="Description" />
            <Service pic={thefour} title="Title" description="Description" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesBlock;
