import styles from '../../styles/products.module.scss'
import Link from 'next/link';
import Head from 'next/head'
import backgroundlogin from '../../assets/backgrounds/background_banner.png'
import BtnPrimary from '../../components/main/btnPrimary'
import Layout from '../../components/main/layout'
import product1 from '../../assets/products/product1.png'
import product2 from '../../assets/products/product2.png'
import product3 from '../../assets/products/product3.png'
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import { AiOutlineStar} from "react-icons/ai";
import { BsHeart} from "react-icons/bs";
import { MdCached, MdFavoriteBorder, MdStarBorder,MdStar,MdStarHalf} from "react-icons/md";
import { IoIosResize} from "react-icons/io";
import { TiShoppingCart} from "react-icons/ti";
import CarouselBlock from '../../blocks/carouselBlock'
import React, { useState, useRef } from 'react';

export async function getServerSideProps({ params }) {
  const res = await fetch(process.env.apiUrl + '/api/products/' + params.serial_number + "/")
  const productdata = await res.json()

  const resMulti = await fetch(process.env.apiUrl + '/api/products/?tag=HostRongo')
  const multiData = await resMulti.json()

  return {
    props: {
      productdata,
      multiData
    },
  }
}


export default function Product({ productdata, multiData }) {
  const [ value, setValue ] = useState(0)
    const [ thumbnails, setThumnails ] = useState([
      (<img src={productdata.images[0].image} />),
      (<img src={product2} />),
      (<img src={product3} />),
    ])
    const wrapper = useRef(null)

    const onchange = (valuee) => {
      setValue(valuee)
    }

  const handleChange = (event) => {
    var menu = event.target.parentElement.children
    var tabs = event.target.parentElement.nextSibling.children

    for (var i = 0; i < menu.length; i++) {
      menu[i].classList.remove(styles.Activecolor)

      if (menu[i] === event.target) {
        for (var j = 0; j < tabs.length; j++) {
          tabs[j].classList.remove(styles.Active)
        }

        tabs[i].classList.add(styles.Active)
        event.target.classList.add(styles.Activecolor)
      }
    }
  }


  return (
  <Layout>

    <Head>
      <title>Host Rongo - Account</title>

      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html:
        JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": productdata.title,
          "image": productdata.images[0].image,
          "description": "This machine will surely be of great use to you, with its high powered processor, lots of RAM, and plenty of storage for your Cloud or other hosting needs",
          "brand": "HP",
          "offers": {
            "@type": "Offer",
            "url": ('http://bdf0a72fd508.ngrok.io/product/' + productdata.serial_number),
            "priceCurrency": "USD",
            "price": productdata.description,
            "priceValidUntil": "2020-07-28",
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition"
          }
        }) }}>
      </script>
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
            "name": "Product",
            "item": "http://bdf0a72fd508.ngrok.io/product/"
          },{
            "@type": "ListItem",
            "position": 3,
            "name": "Account",
            "item": ('http://bdf0a72fd508.ngrok.io/product/' + productdata.serial_number)
          }]
        }) }}>
      </script>
      <meta property="og:url"                content={'http://localhost:3000/product/' + productdata.serial_number} />
      <meta property="og:type"               content="website" />
      <meta property="og:title"              content="Host Rongo" />
      <meta property="og:description"        content="We provide Quick and secure web hosting, such as Shared hosting, Cloud servers, VPS hosting and Domains." />
      <meta property="og:image"              content={productdata.images[0].image} />

      <meta property="twitter:card" content="website" />
    </Head>
    <div className={`${styles.Wrapper} ${"Shell"}`}>
        <div className={styles.Main}>
          <div className={styles.Product}>
            <div className={styles.Product_image}>
              <div className={styles.CarouselWrapper}>
                <Carousel dots infinite keepDirectionWhenDragging
                  slidesPerPage={1} itemWidth={wrapper.offsetWidth}
                  value={value}
                  onChange={onchange}
                  >
                  <img src={product1} alt="productImage"/>
                  <img src={product2} alt="productImage"/>
                  <img src={product3} alt="productImage"/>
                </Carousel>
                <Dots number={3} thumbnails={thumbnails} value={value} onChange={onchange} />
              </div>
            </div>

            <div className={styles.Product_details}>
              <div className={styles.Product_rate}>
                <MdStar/>
                <MdStar/>
                <MdStarHalf/>
                <MdStarBorder/>
                <MdStarBorder/>
              </div>
            <div className={styles.Product_desc}>
              <h2>{productdata.title}</h2>
              <p>Welcome to the sphere of high technologies and rational solutions. Nowadays web is the most progressive sphere and its development is very rapidhop</p>
              <p>{productdata.description}</p>
            </div>
            <div className={styles.Product_actions}>
              <a href=""><TiShoppingCart/> ADD TO CART</a>
            </div>
            <div className={styles.Product_tags}>
              <h5>Categories:</h5>
              <a href=""> Annouances accepted</a>
              <a href=""> Distinguish</a>
              <a href=""> Domain names</a>
              <a href=""> Servers</a>
            </div>
            <div className={styles.Product_tags}>
              <h5>Tags:</h5>
              <a href="">Perfectly simple</a>
              <a href="">new</a>
            </div>
          </div>
        </div>

        <div className={styles.TabPanel}>
          <div className={styles.TabPanel_control}>
            <h3 onClick={handleChange}>Description</h3>
            <h3 onClick={handleChange}>Reviews</h3>
            <h3 onClick={handleChange}>Shipping</h3>
          </div>
          <div className={styles.TabPanel_content}>
            <div className={`${styles.Tab} ${styles.Tab_flex}`}>
              <h3>Description</h3>
              <p>The HPE ProLiant MicroServer Gen10 delivers an affordable compact entry level server specifically designed for small offices, home offices, or small business environments.
              </p>
            </div>

            <div className={`${styles.Tab} ${styles.Tab_flex}`}>
              <h3>Additional information</h3>
              <p><span>Brand</span>DELL</p>
              <p><span>Manufacturer</span>USA</p>
              <p><span>Capacity</span>100TB</p>
              <p><span>Power</span>700 Watts</p>
              <p><span>Processor</span>DELL</p>
              <p><span>Warranty</span>DELL</p>
            </div>

            <div className={styles.Tab}>
              <h3>Adipiscing Convallis Bulum</h3>
              <p>Scelerisque adipiscing bibendum sem vestibulum et in a a a purus lectus faucibus lobortis tincidunt purus lectus nisl class eros.Condimentum a et ullamcorper dictumst mus et tristique elementum nam inceptos hac parturient scelerisque vestibulum amet elit ut volutpat.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.Sidebar}>
        <div className={styles.Sidebar_article}>
          <h3>Shipping</h3>
          <p>Free shippingdelivery all orders of $49 or more of eligible items across any product category qualify.</p>
        </div>
        <div className={styles.Sidebar_article}>
          <h3>Payment</h3>
          <p>Credit Card: Visa, MasterCard, Maestro, American Express. The total will be charged to your card when the order is shipped.</p>
        </div>
        <div className={styles.Sidebar_article}>
          <h3>Return Policy</h3>
          <p>You can return any item purchased on WooStroid within 20 days of the delivery date.</p>
        </div>
      </div>
    </div>
  <CarouselBlock productData={multiData} />
  </Layout>
  )
}
