import React from "react";
import withLoading from "../../components/withLoading/withLoading";
import { useSelector } from "react-redux";
function Product({ data }) {
  // const product =useSelector(state=>state.productReducer)
  // throw new Error("I crashed!");
  return (
    <div>
      product
      {data.map((item) => {
        return <div>hi</div>;
      })}
    </div>
  );
}

export default withLoading(Product);
