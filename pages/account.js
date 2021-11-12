import Layout from '../components/main/layout'
import Head from 'next/head'
import Link from 'next/link';
import avatar from '../assets/avatar/avatar.png'
import styles from '../styles/account.module.scss'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import jwt from 'jsonwebtoken';
import dynamic from "next/dynamic";
import Router from 'next/router'

export async function getServerSideProps({req, res}) {
  var userdata = []

  {/* Check if we have section named "cookie" in
    the headers of the request that came to the server */}
  if (req.headers.cookie) {
    {/* Split the section "cookie" in dictionary */}
    var str = req.headers.cookie.split('; ');
    var cookies = {};

    for (var i = 0; i < str.length; i++) {
      var cur = str[i].split('=');
      cookies[cur[0]] = cur[1];
    }

    {/* Check if the key 'token' exists in the cookie section */}
    if (cookies['token']) {
      var d = new Date();
      var now = Math.round(d.getTime() / 1000);
      var expires = jwt.decode(cookies['token']).exp

      {/* Check if the token is expired */}
      if (now >= expires) {
        {/* Imagine that this request has been done in the background from NextJS
          What happens is that when the user tries to open the prefetched page
          the redirect was already done. But the data is not there (That's the error).
          So we check if the browser is present in the time when the request was made. So
          we know that this was done in the background and we don't need to redirect. */}
        if (process.Browser !== undefined) {
          res.setHeader("location", "/login");
          res.statusCode = 302;
          res.end();
        }
      }
      else {
        {/* When the cookie token exists and it is not expired
          we will fetch the data for the page */}
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + cookies['token']);
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
          method: 'GET',
          headers: myHeaders
        };

        const rest = await fetch(process.env.apiUrl + '/api/profiles/' + jwt.decode(cookies['token']).user_id, requestOptions)
        userdata = await rest.json()
      }
    }
  }
  else {
    {/* When the section cookie does not exists in the headers
      and we checking the same thing from above for the redirect. */}
    if (process.Browser !== undefined) {
      res.setHeader("location", "/login");
      res.statusCode = 302;
      res.end();
    }
  }

  return {
    props: {
      userdata
    },
  }
}

const LoginPage = dynamic(() => import("./login"));

function Account({ userdata }) {
  if (Cookies.get('token')) {
    var d = new Date();
    var now = Math.round(d.getTime() / 1000);
    var expires = jwt.decode(Cookies.get('token')).exp

    if (now >= expires) {
      Cookies.remove('token')
      Router.push('/login')
    }
    else {
      return (
        <Layout>
          <Head>
            <title>Host Rongo - Account</title>
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
          <div className={styles.Account}>
            <div className={styles.Person}>
              <div className={styles.Person_image}>
                <img src={avatar}/>
              </div>
              <h2>{userdata.first_name + " " + userdata.last_name}</h2>
              <div className={styles.Person_menu}>
                <ul>
                  <li><a href="/">Account</a></li>
                  <li><a href="/">Change Password</a></li>
                  <li><a href="/">Billing Address</a></li>
                  <li><a href="/">My Orders</a></li>
                  <li><a href="/">Private</a></li>
                  <li><Link href="/update"><a>Update Account</a></Link></li>
                  <li><a href="/">Delete Account</a></li>
                </ul>
              </div>
            </div>
            <div className={styles.Orders}>
              <div className={styles.Orders_grid}>
                <div className={styles.Main_row}>
                  <p>Order</p>
                  <p>Name</p>
                  <p>Quontity</p>
                  <p>Price</p>
                  <p>Date</p>
                </div>
                <div className={styles.Grid_row}>
                  <div>123</div>
                  <div>Bluetooth Portable</div>
                  <div>2</div>
                  <div>$299</div>
                  <div>29.02</div>
                </div>
                <div className={styles.Grid_row}>
                  <div>123</div>
                  <div>Bluetooth Portable</div>
                  <div>2</div>
                  <div>$299</div>
                  <div>29.02</div>
                </div>
                <div className={styles.Grid_row}>
                  <div>123</div>
                  <div>Bluetooth Portable</div>
                  <div>2</div>
                  <div>$299</div>
                  <div>29.02</div>
                </div>
                <div className={styles.Grid_row}>
                  <div>123</div>
                  <div>Bluetooth Portable</div>
                  <div>2</div>
                  <div>$299</div>
                  <div>29.02</div>
                </div>
                <div className={styles.Grid_row}>
                  <div>123</div>
                  <div>Bluetooth Portable</div>
                  <div>2</div>
                  <div>$299</div>
                  <div>29.02</div>
                </div>
                <div className={styles.Grid_row}>
                  <div>123</div>
                  <div>Bluetooth Portable</div>
                  <div>2</div>
                  <div>$299</div>
                  <div>29.02</div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      );
    }
  }
  else {
    useEffect(() => {
      Router.push("/wtf", "/login", { shallow: true });
    })

    return <LoginPage />
  }
}

export default Account;
