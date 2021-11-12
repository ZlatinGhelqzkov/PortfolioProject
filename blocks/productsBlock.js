import styles from '../styles/productsBlock.module.scss'
import CarouselBlock from './carouselBlock'

export default function ProductsBlock( { productData } ){


  return(
    <section className="Section">
      <div className="Shell">
        <div className="Section_head">
          <span>featured products</span>
          <h3>Choose a server for yourself</h3>
        </div>
        <div className="Section_body">
          <CarouselBlock productData={productData} />
        </div>
      </div>
    </section>


  )
}
