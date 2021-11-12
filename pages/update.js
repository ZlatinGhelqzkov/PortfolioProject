import Link from 'next/link';
import Head from 'next/head'
import BtnPrimary from '../components/main/btnPrimary'
import Layout from '../components/main/layout'
import styles from '../styles/update.module.scss'
import backgroundupdate from '../assets/backgrounds/background_banner.png'
import { useState, useRef } from 'react'

export default function Update (){

  const inputRef = useRef(null);

  const [userUpdate, setUserUpdate] = useState({
    "first_name" : '',
    "last_name" : '',
    "email" : '',
    "phone" : ''
  })

  const handleChange = () => {
    setUserUpdate({...userUpdate, [event.target.name]: event.target.value})
  }

  const updateUser = (event) => {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk0ODAyMTQyLCJqdGkiOiI3ZjFmYmNlOGI0M2I0NDZmOGMyYzBhNWM0NzFmMDA1YSIsInVzZXJfaWQiOjJ9.TgXbiEnBJPb26-yzTGcJOgD8frXXBiGORBvnkG9Zd6Q");

    var formdata = new FormData();
    formdata.append("first_name", `${userUpdate.first_name}`);
    formdata.append("last_name", `${userUpdate.last_name}`);
    formdata.append("email", `${userUpdate.email}`);
    formdata.append("phone", `${userUpdate.phone}`);

    var requestOptions = {
      method: 'PATCH',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://www.trainingapi.tk/api/profiles/17/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

      console.log(formdata)
  }


  return (
    <Layout>
      <Head>
      <title>Host Rongo - Profile Update</title>
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
            "item": "http://bdf0a72fd508.ngrok.io/Account"
          },{
            "@type": "ListItem",
            "position": 3,
            "name": "Update",
            "item": "http://bdf0a72fd508.ngrok.io/update"
          }]
        }) }}>
      </script>
      </Head>

    <div className={styles.Update} style={{ backgroundImage: 'url('+backgroundupdate+')' }}>
      <div className={styles.Update_inner}>
        <h2>Update Profile</h2>
        <div className={styles.Update_firstname}>
          <input  onChange={handleChange} name="first_name" />
          <label>Fisrt name</label>
        </div>
        <div className={styles.Update_lastname}>
          <input onChange={handleChange}  name="last_name" />
          <label>Last name</label>
        </div>
        <div className={styles.Update_email}>
          <input onChange={handleChange}  name="email"/>
          <label>E-mail</label>
        </div>
        <div className={styles.Update_phone}>
          <input onChange={handleChange} name="phone" />
          <label>Phone</label>
        </div>
        <BtnPrimary fun={updateUser} name="Update"/>
      </div>
    </div>
    </Layout>

  )

}
