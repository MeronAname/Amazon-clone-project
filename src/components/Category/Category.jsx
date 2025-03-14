import React from 'react';
import { categoryInfos } from "./catagoryfullnfos"; // Renamed to categoryInfos for clarity
import CategoryCard from './CategoryCard';
import classes from './Catagory.module.css'
function Category() {
  return (
    <section className={classes.category__container}>
      {
        categoryInfos?.map((infos) => {
          return <CategoryCard key={infos.imgLink} data={infos} />
        })
      }
    </section>
  )
}

export default Category;
