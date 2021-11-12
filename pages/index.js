import Head from 'next/head'
import Layout from '../components/main/layout'
import styles from '../styles/home.module.scss'
import IntroBlock from '../blocks/introBlock'
import RatesBlock from '../blocks/ratesBlock'
import ProductivityBlock from '../blocks/productivityBlock'
import AboutBlock from '../blocks/aboutBlock'
import GoalsBlock from '../blocks/goalsBlock'
import PackagesBlock from '../blocks/packagesBlock'
import ProductsBlock from '../blocks/productsBlock'
import SubscribeBlock from '../blocks/subscribeBlock'
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

export default function Home( { productdata }) {

  const [shoppingcart, setShoppingcart] = useState([])

  return (
    <Layout>
      <Head>
        <title>Host Rongo - Quick & Secure Web Hosting</title>
      </Head>
      <IntroBlock />
      <RatesBlock />
      <ProductivityBlock />
      <AboutBlock />
      <GoalsBlock />
      <PackagesBlock />
      <ProductsBlock productData={productdata}/>
      <SubscribeBlock />
    </Layout>
  )
}
