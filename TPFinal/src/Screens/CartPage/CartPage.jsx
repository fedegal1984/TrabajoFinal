import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCard, ProductCartCard } from '../../components'
import "./CartPage.css"

const CartPage = () => {
    const {cart, getTotal} = useCustomContext()
    console.log(getTotal())
  return (
    <>
    <p className='p-titulo'>Tus productos:</p>
    <div className='cartPage-container'>
        
        {cart.length > 0 ?
        <>
        <div className='cartPage-cart'>
            {cart.map(product =>(
                <ProductCartCard producto={product} key={product.id}></ProductCartCard>
            ))}
        </div>
        </>
        :
        <h1>No has comprado nada aún</h1>
        }
    </div>
    <div className='total'>
        <p className='p-titulo'>Total: ${getTotal()}</p>
    </div>
    <div className='btn-container'>
        <button className='btn-comprar'>Comprar</button>
    </div>
    </>
  )
}

export default CartPage