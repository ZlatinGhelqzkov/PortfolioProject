import styles from '../styles/login.module.scss'
import Link from 'next/link';
import Head from 'next/head';
import backgroundlogin from '../assets/backgrounds/background_banner.png'
import BtnPrimary from '../components/main/btnPrimary'
import Layout from '../components/main/layout'
import Cookies from 'js-cookie'
import { useForm } from 'react-hook-form';
import { useState } from 'react'
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

    if(cookies['token']){
      res.setHeader("location", "/account");
      res.statusCode = 302;
    }
  }

    return {
      props: {
        userdata
      },
    }
  }

export default function Login (){

  const [validation, setValidation] = useState(false);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({"username": data.username, "password": data.password})
    };

    fetch("https://www.trainingapi.tk/auth/jwt/create", requestOptions)
    .then(response => response.json())
    .then(result => {
      if (result.access){
      Cookies.set('token', result.access)
      window.location.href="/account"
      }
      else {setValidation(true)};
    })
    .catch(error => console.log('error', error));
  }

  return (
  <Layout>
    <Head>
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
          "name": "Login",
          "item": "http://bdf0a72fd508.ngrok.io/login"
        }]
      }) }}>
    </script>
    </Head>
    <div className={styles.Login} style={{ backgroundImage: 'url('+backgroundlogin+')' }}>
      <div className={styles.Login_inner}>
        {validation ? <h3>Wrong Username or Password</h3> : ""}
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.Login_username}>
          <input type="text" name="username" ref={register}/>
          <label>Username</label>
        </div>
        <div className={styles.Login_password}>
          <input type="password" name="password" autocomplete="on" ref={register} />
          <label>Password</label>
        </div>
        <BtnPrimary  type="submit" name="login"/>
        </form>
        <p>Don't have an accout?</p>
        <Link href="/register"><a>Register</a></Link>
      </div>
    </div>
  </Layout>
  )
}
