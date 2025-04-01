import React, { useEffect, useState } from 'react'
import axios from 'axios' 
import ProductCard from './ProductCard'
import classes from "./Product.module.css"

function Product() {
   const [products, setProducts] = useState([]) // Initialize as an empty array

   useEffect(() => {
      axios.get('https://fakestoreapi.com/products')
      .then((res) => {
          setProducts(res.data)
      }).catch((err) => {
          console.log(err)
      })
   }, [])

   return (
      <section className={classes.products_container}  >
         {products.length > 0 ? (
            products?.map((singleProduct) => (
               <ProductCard product={singleProduct} key={singleProduct.id} renderAdd={true} />

            ))
         ) : (
            <p>Loading...</p> // Show a loading message while products are being fetched
         )}
      </section>
   )
}

export default Product
