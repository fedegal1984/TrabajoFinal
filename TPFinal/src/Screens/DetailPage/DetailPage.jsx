import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { Counter } from '../../components'
import "./DetailPage.css"

const DetailPage = () => {

    const {id} = useParams()
    const {getProductById, addProductCart, isInCart, cart, getProductCartById} = useCustomContext()
    const [productDetail, setProductDetail] = useState(isInCart(id) ? getProductCartById(id) :  getProductById(id))

  return (
    <>
    <h1 className='ofertas'>{productDetail.nombre}</h1>
    <div className='detail-main'>
        <div className='imagen-precio'>
          <img src={productDetail.imagen} alt="" />
          <h2>${productDetail.precio}</h2>
        </div>
        <div className='descripcion-contador'>
          <h2>Descripción: {productDetail.descripcion}</h2>
          <div>
            {
            isInCart(id) 
            ? 
            <Counter initialValue={productDetail.quantity} stock={productDetail.stock} id={productDetail.id}/>
            :
            <Counter initialValue={1} stock={productDetail.stock} id={productDetail.id}/>
            }
          </div>
        </div>
    </div>
    </>
  )
}

export default DetailPage