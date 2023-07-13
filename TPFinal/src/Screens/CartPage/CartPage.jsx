import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCard, ProductCartCard } from '../../components'

const CartPage = () => {
    const {cart, getTotal} = useCustomContext()
    console.log(getTotal())
  return (
    <div>
        {cart.length > 0 ?
        <>
        <div>
            {cart.map(product =>(
                <ProductCartCard producto={product} key={product.id}></ProductCartCard>
            ))}
        </div>
        </>
        :
        <h1>No has comprado nada aún</h1>
        }
        
        <div>
            Total: ${getTotal()}
        </div>
    </div>
  )
}

export default CartPage