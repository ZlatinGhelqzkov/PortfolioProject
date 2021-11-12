import ls from 'local-storage'
import Product from '../components/secondary/product'
import { useState } from 'react'

export default function ProductBlock({productData}) {
  var cartLs = ls.get('Cart')
  if (cartLs === null) {
    cartLs = {}
  }
  const [cart, setCart] = useState(cartLs)

  const addToCart = (component) => {

    if (cart[component.serial_number] === undefined) {
      component['quantity'] = 1
      cart[component.serial_number] = component
    }
    else {
      component['quantity'] = component['quantity'] + 1
      cart[component.serial_number] = component
    }

    console.log(Object.values(cart))
    ls.set('Cart', cart)
  }

  const removeFromCart = (id) => {
    var ccart = ls.get('Cart')
    delete ccart[id]
    ls.set('Cart', ccart)
  }
  return (
    <div className="Shell">
      <div className="ProductBlock">
        {productData.results.map ((component, index) =>
          <Product key={component.serial_number} productdata={component} method={addToCart} remove={removeFromCart}/>
        )}
      </div>
    </div>
  );
}
