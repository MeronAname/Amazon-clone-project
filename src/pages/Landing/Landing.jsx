import React from 'react'
import Carousel from '../../components/Carousel/CarouselEffect'
import Layout from '../../components/Layout/Layout'
import Product from '../../components/Product/Product'
import Category from '../../components/Category/Category'

function Landing() {
  return (
    <Layout>
      <Carousel/>
      <Category/>
      <Product/>
    </Layout>
  )
}

export default Landing
