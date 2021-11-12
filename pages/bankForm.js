import Layout from '../components/main/layout'
import { useForm } from 'react-hook-form'
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken';
import BtnPrimary from '../components/main/btnPrimary'

export async function getServerSideProps({req, res}) {
  var userdata = []

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
        res.setHeader("location", "/login");
        }
      }
      else {
        {
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
      res.setHeader("location", "/login");
      res.statusCode = 302;
    }



  return {
    props: {
      userdata
    },
  }
}

const createOrder = () => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + Cookies.get('token'));
  myHeaders.append("Content-Type", "application/json");

  var formdata = new FormData();
  formdata.append("client", jwt.decode(Cookies.get('token')).user_id);
  formdata.append("status", "Pending Payment");

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  };

  fetch("https://www.trainingapi.tk/api/orders/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .then()
    .catch(error => console.log('error', error));
  }


export default function BankForm() {
  return(
    <Layout>

      <BtnPrimary fun={createOrder} name="Payment"/>
    </Layout>

  );
}
