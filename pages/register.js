import Link from 'next/link';
import Head from 'next/head';
import BtnPrimary from '../components/main/btnPrimary'
import Layout from '../components/main/layout'
import styles from '../styles/register.module.scss'
import backgroundregister from '../assets/backgrounds/background_banner.png'
import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form';

export default function Register() {
  const { register, handleSubmit, errors } = useForm();

  const inputRef = useRef(null);



  const onSubmit = (data) =>{
    var formdata = new FormData();
    formdata.append("email", data.email);
    formdata.append("username", data.username);
    formdata.append("password", data.password);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://www.trainingapi.tk/auth/users/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  }

  return (
  <Layout>
    <Head>
    <title>Host Rongo - Account Register</title>
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
          "name": "Register",
          "item": "http://bdf0a72fd508.ngrok.io/register"
        }]
      }) }}>
    </script>
    </Head>

    <div className={styles.Register} style={{ backgroundImage: 'url('+backgroundregister+')' }}>
      <div className={styles.Register_inner}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.Register_firstname}>
            <input ref={register}/>
            <label>Fisrt name</label>
          </div>
          <div className={styles.Register_lastname}>
            <input ref={register}/>
            <label>Last name</label>
          </div>
          <div className={styles.Register_email}>
            <input type="email" name="email" ref={register}/>
            <label>E-mail</label>
          </div>
          <div className={styles.Register_username}>
            <input  type="text" name="username" ref={register}/>
            <label>Username</label>
          </div>
          <div className={styles.Register_password}>
            <input name="password" type="password" ref={register}/>
            <label>Password</label>
          </div>
          <BtnPrimary type="submit" name="Register"/>
        </form>
        <p>Already have an account?</p>
        <Link href="/login"><a>Login</a></Link>
      </div>
    </div>
  </Layout>

  )
}
