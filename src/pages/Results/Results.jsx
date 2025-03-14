import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import axios from "axios";
import { productUrl } from "../../Api/endPoint";
import { useParams } from "react-router-dom";
import LayOut from "../../Components/LayOut/LayOut";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Loader/Loader";
function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const { categoryName } = useParams();
  console.log(categoryName);


  useEffect(() => {
    (async () => {
      setisLoading(true);
      try {
        let request = await axios.get(
          `${productUrl}/products/category/${categoryName}`
        );
        console.log(request);
        setResults(request.data);
        setisLoading(false);
      } catch (error) {
        console.error(error);
        setisLoading(false);
      }
    })();
  }, [categoryName]);

  return (
    <LayOut>
      <div>
        <h1 style={{ padding: "2rem" }}>Results</h1>
        <p style={{ padding: "2rem" }}>Category / {categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products__container}>
            {results.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderAdd={true}
              />
            ))}
          </div>
        )}
      </div>
    </LayOut>
  );
}

export default Results;

