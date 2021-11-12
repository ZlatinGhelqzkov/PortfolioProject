import styles from '../../styles/product.module.scss'
import BtnSecondary from './btnSecondary'
import { useState } from 'react'

export default function Product({ productdata, method, remove, render }) {

  return(
    <div className={styles.Product}>
      <div className={styles.Product_inner}>
        <div className={styles.Product_image}>
          <img src={productdata.images[0].image} alt="Product" />
        </div>
        <div className={styles.Product_content}>
          <h4>{productdata.title}</h4>
          <h3>{productdata.description}</h3>
          <button onClick={() => method(productdata)}>ADD TO CART </button>
          <button onClick={() => remove(productdata.serial_number)}>REMOVE FROM CART</button>
        </div>
      </div>
    </div>
  );
}
