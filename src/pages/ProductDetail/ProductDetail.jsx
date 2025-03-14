import React, { useEffect, useState } from "react";
import classes from "./ProductDetail.module.css";
import { productUrl } from "../../Api/endPoint";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/Product/ProductCard";
import axios from "axios";
import LayOut from "../../Components/LayOut/LayOut";
import Loader from "../../components/Loader/Loader";

function ProductDetail() {
  const { productId } = useParams();

  console.log(productId);
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        console.log(res);
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <LayOut>
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <ProductCard product={product} flex={true} renderDesc={true} renderAdd={true}/>
        )}
      </div>
    </LayOut>
  );
}

export default ProductDetail;
