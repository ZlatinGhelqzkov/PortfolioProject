import { useForm } from 'react-hook-form';
import BtnPrimary from '../components/main/btnPrimary'
import Layout from '../components/main/layout'
import Link from 'next/link'
import styles from '../styles/formTesting.module.scss'
import backgroundregister from '../assets/backgrounds/background_banner.png'

export default function FormTesting() {

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) =>{
    console.log(data);
  }

  return(
    <Layout>
    <div className={styles.Register} style={{ backgroundImage: 'url('+backgroundregister+')' }}>
      <div className={styles.Register_inner}>
        <h2>Form Testing</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.Register_firstname}>
            <input name="first_name" ref={register}/>
            <label>Fisrt name</label>
          </div>
          <div className={styles.Register_lastname}>
            <input name="last_name" ref={register}/>
            <label>Last name</label>
          </div>
          <div className={styles.Register_email}>
            <input type="email" name="email" ref={register}/>
            <label>E-mail</label>
          </div>
          <div className={styles.Register_username}>
            <input  type="text" name="username" ref={register({required: true, minLength: 6, maxLength: 20})}/>
            <label>Username</label>
          </div>
          <div className={styles.Register_password}>
            <input name="password" type="password" autoComplete="on" ref={register({required: true, minLength: 8})}/>
            <label>Password</label>
          </div>
          <div className={styles.Register_username}>
            <input type="date" name="date" ref={register} />
          </div>
          <div className={styles.Register_username}>
            <input type="time" name="time" ref={register} />
          </div>
          <BtnPrimary type="submit" name="Register"/>
        </form>
        <p>Already have an account?</p>
        <Link href="/login"><a>Login</a></Link>
      </div>
    </div>
    </Layout>
  );
}
