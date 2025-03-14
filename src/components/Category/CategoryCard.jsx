import React from 'react';
import classes from './Catagory.module.css'
import { Link } from 'react-router-dom';
function CategoryCard({ data }) {
  return (
    <div className={classes.category}>
      <Link to={`/category/${data?.name}`}> {/* Add dynamic link or a placeholder */}
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt={`Image for ${data.title}`} /> {/* Descriptive alt text */}
        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
