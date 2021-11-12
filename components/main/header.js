import Headroom from 'react-headroom'
import { useState, useRef } from 'react'
import Link from 'next/link'
import styles from '../../styles/header.module.scss'
import logo from '../../assets/logos/LogoHeader.svg'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { RiShoppingCartLine } from "react-icons/ri";
import useOutsideClick from './useOutsideClick'
import Cookies from 'js-cookie'

function Header() {
    const [ opened, setOpened ] = useState(false)
    const [ search, setSearch ] = useState(false)
    const [ loggedin, setLoggedin] = useState(false)

    const logout = () => {
      Cookies.remove('token')
    };

    const refSearch = useRef();

    useOutsideClick(refSearch, () => {
       if (search === true) {
         setSearch(false);
       }
     });

    return (
    <div className={`Header_wrapper ${opened ? styles.Dim : ""} ${search ? styles.DimSearch : ""}`}>
      <Headroom>
        <header className={styles.Header}>
          <div className="Shell">
            <div className={styles.Header_inner}>
              <div className={styles.Header_inner_top}>
                <div className={styles.Header_social}>
                  <div className={styles.Header_social_inner}>
                    <div className={styles.Social_phone}>
                      <h4>Call 24/7:
                        <span>800 123-45-67</span>
                      </h4>
                    </div>
                      <div className={styles.Social}>
                        <h4>Get Social: </h4>
                        <FaFacebookF />
                        <FaInstagram />
                        <FaYoutube />
                        <FaTwitter />
                      </div>
                  </div>
                  <div className={styles.Header_login}>
                    {Cookies.get('token') ? <Link href="/"><a onClick={logout}>Log out</a></Link> : <Link href="/login"><a>Login</a></Link>}
                    <p>/</p>
                    <Link href="/register"><a>Registration</a></Link>
                  </div>
                </div>
              </div>

              <div className={styles.Header_inner_bottom}>
                <div className={styles.Header_logo}>
                  <img src={logo} alt="HeaderLogo"/>
                </div>
                <div className={styles.Header_actions}>
                  <nav className={styles.Nav}>
                    <ul>
                    <li>
                      <Link href="/index"><a>Home</a></Link>
                    </li>
                    <li>
                      <Link href="/account"><a>My Account</a></Link>
                    </li>
                    <li>
                      <Link href="/price"><a>Price</a></Link>
                    </li>
                    <li>
                      <Link href="/shop"><a>Shop</a></Link>
                    </li>
                    <li>
                      <Link href="/server"><a>Server</a></Link>
                    </li>
                    <li>
                      <Link href="/hosting"><a>Hosting</a></Link>
                    </li>
                    </ul>
                  </nav>
                  <div className={styles.Header_ShoppingCart}>
                    <button onClick={() =>{setSearch(!search)}} aria-label="Search" className={`${search ? styles.SearchOpen : styles.SearchClose}`}><i><RiSearchLine /></i></button>
                    <Link href="/shoppingcart"><a aria-label="Shopping Cart"><RiShoppingCartLine /></a></Link>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </header>
      </Headroom>

      <nav className={`${styles.MobileNav} ${opened ? styles.Opened : "" }`}>
        <div onClick={() => {setOpened(!opened)}} className={ `${styles.hamburger} ${styles.hamburgerSlider} ${opened ? styles.isActive : ""}` }>
          <div className={styles.hamburgerBox}>
            <div className={styles.hamburgerInner}></div>
          </div>
        </div>
        <ul>
          <li>
            <Link href="/index"><a>Home</a></Link>
          </li>
          <li>
            <Link href="/price"><a>Price</a></Link>
          </li>
          <li>
            <Link href="/store"><a>Store</a></Link>
          </li>
          <li>
            <Link href="/server"><a>Server</a></Link>
          </li>
          <li>
            <Link href="/hosing"><a>Hosting</a></Link>
          </li>
        </ul>
      </nav>

      <div ref={refSearch} className={`${styles.Search} ${search ? styles.SearchOpen : ""}`}>
        <div className={`${styles.Search_inner} ${search ? styles.Search_innerOpen : ""}`}>
          <label>Search products ...</label>
          <input />
          <button><RiSearchLine /></button>
        </div>
      </div>
    </div>
  );
}

export default Header;
