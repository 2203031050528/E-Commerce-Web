import React from 'react'
import Navbar from '../features/navbar/Navbar'
// import ProductList from '../features/product-list/components/ProductList'
import ProductDetails from '../features/product-list/components/ProductDetails'

function ProductDetailsPage ()  {
  return (
    <div>
      <Navbar>
      <ProductDetails></ProductDetails>
      </Navbar>
      
    </div>
  )
}

export default ProductDetailsPage
