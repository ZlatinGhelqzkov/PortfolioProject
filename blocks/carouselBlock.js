import React, { useRef } from 'react';
import { useState } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import Link from 'next/link';
import styles from '../styles/carouselBlock.module.scss';
import p1 from '../assets/products/product1.png';
import p2 from '../assets/products/product2.png';
import p3 from '../assets/products/product3.png';
import p4 from '../assets/products/product4.png';
import p5 from '../assets/products/product5.png';
import p6 from '../assets/products/product6.png';
import p7 from '../assets/products/product7.png';
import { FaDollarSign } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import BtnSecondary from '../components/secondary/btnSecondary'
import { BsStarHalf } from "react-icons/bs";
import Product from '../components/secondary/product'

export default function CarouselBlock( { productData } ) {

  const wrapper = useRef(null)

  return(
    <div className={styles.CarouselWrapper} ref={wrapper}>
      <Carousel dots keepDirectionWhenDragging
      slidesPerPage={4} slidesPerScroll={4} itemWidth={wrapper.offsetWidth}

    breakpoints={{
      640: {
        slidesPerPage: 1,
      },
      768: {
        slidesPerPage: 3,
        slidesPerScroll: 3,
      }
    }}>
          {productData.results.map ((component, index) =>
            <div key={component.serial_number}>
              <Product productdata={component}/>
            </div>
          )}
      </Carousel>
    </div>


  )
}
