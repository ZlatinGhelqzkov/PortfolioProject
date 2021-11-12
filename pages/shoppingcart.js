import styles from '../styles/shoppingcart.module.scss'
import Layout from '../components/main/layout'
import Link from 'next/link'
import Head from 'next/head'
import BtnPrimary from '../components/main/btnPrimary'
import { GrFormClose } from "react-icons/gr";
import { MdRefresh } from "react-icons/md";
import p1 from "../assets/products/product1.png"
import p2 from "../assets/products/product4.png"
import p3 from "../assets/products/product5.png"
import ProductBlock from '../blocks/productBlock'
import ls from 'local-storage'
import Product from '../components/secondary/product'
import { useState, useEffect } from 'react'

export async function getServerSideProps (){
  const res = await fetch(process.env.apiUrl + '/api/products/?tag=HostRongo')
  const productdata = await res.json()

  return {
    props: {
      productdata
    },
  }
}


export default function ShoppingCart({productdata}) {

    var render = false;
    var cartItems = ls.get('Cart')
    if (cartItems === null) {
      cartItems = {}
    }

    console.log(Object.values(cartItems));


  return (
    <Layout>
    <Head>
    <title>Host Rongo - Shopping Cart</title>
    <script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html:
      JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "http://bdf0a72fd508.ngrok.io/"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Shoppingcart",
          "item": "http://bdf0a72fd508.ngrok.io/shoppingcart"
        }]
      }) }}>
    </script>
    </Head>

      <div className={styles.Breadcrumbs}>
        <div className="Shell">
          <div className={styles.Breadcrumbs_inner}>
            <Link href="/index"><a>Home</a></Link>
            <Link href="/shoppingcart"><a>Cart</a></Link>
          </div>
        </div>
      </div>
      <div>



      </div>
      <div className={styles.Products}>
        <div className="Shell">
          <div className={styles.Products_inner}>
            <h4>Cart</h4>
            <div className={styles.Products_order}>
              {Object.values(cartItems).map((item, index) =>
                <Product key={item.serial_number} productdata={item} render={render}/>
              )}
            </div>
            <div className={styles.Cart_coupon}>
              <p>Coupon:</p>
              <div className={styles.Coupon_code}>
                <input />
                <label>Coupon code</label>
              </div>
              <BtnPrimary name="Apply coupon"/>
              <div className={styles.Update_cart}>
                <MdRefresh/>
                <h3>Update cart</h3>
              </div>
            </div>

            <div className={styles.Cart_totals}>
              <h4>Cart Totals</h4>
              <div className={styles.Cart_subtotal}>
                <p>Subtotal</p>
                <h4>$4,000.00</h4>
              </div>
              <div className={styles.Cart_total}>
                <p>Total</p>
                <h4>$4,000.00</h4>
              </div>
              <Link href="/bankForm"><a><BtnPrimary name="Proceed to checkout" /></a></Link>
            </div>
          </div>
        </div>
      </div>


    </Layout>

  )
}
