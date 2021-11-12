import Layout from '../components/main/layout'
import Head from 'next/head'
import styles from '../styles/shop.module.scss'
import { useState } from 'react'
import ProductBlock from '../blocks/productBlock'

export async function getServerSideProps (){
  const res = await fetch(process.env.apiUrl + '/api/products/?size=12&tag=HostRongo')
  const productdata = await res.json()

  return {
    props: {
      productdata
    },
  }
}

export default function Shop({ productdata }) {
  const [inData, setInData] = useState(productdata);

  const fetchMore = () => {
    console.log("hi")
  }

  return(

    <Layout>
      <Head>
      <title>Host Rongo - Shop</title>
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
            "name": "Account",
            "item": "http://bdf0a72fd508.ngrok.io/account"
          }]
        }) }}>
      </script>
      </Head>

      <div className="Shell">
        <div className={styles.Shop}>
          <ProductBlock fetchMore={fetchMore} productData={inData} />
        </div>
      </div>
    </Layout>
  );

}
