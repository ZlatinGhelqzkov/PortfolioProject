import Layout from '../components/main/layout'
import Head from 'next/head'
import ReactPaginate from 'react-paginate'
import { useState } from 'react'
import ProductBlock from '../blocks/productBlock'

export async function getServerSideProps (){
  const res = await fetch(process.env.apiUrl + '/api/products/?size=3&tag=HostRongo')
  const componentdata = await res.json()

  return {
    props: {
      componentdata
    },
  }
}

const handlePageClick = (select) => {
  let currentPage;

  currentPage = select.selected + 1;

  if(true) {
    fetch(process.env.apiUrl + `/api/products/?page=${currentPage}&size=${perRow}&tag=HostRongo`)
      .then(res => res.json)
  }
}

export default function Paginatedshop({componentdata}) {
  const [data, setData] = useState(componentdata);


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
            "name": "PaginatedShop",
            "item": "http://bdf0a72fd508.ngrok.io/paginatedshop"
          }]
        }) }}>
      </script>
      </Head>
      <ProductBlock  componentdata={componentdata} />
    </Layout>
  );
}
