import React from "react";
import productsData from './product-data'

const Product = (props) => {
  console.log(JSON.stringify(props, null, 2));
  const {match} = props;
  var product = productsData.find(p => p.id == match.params.productId);

  var productData;
  if(product)
    productData = <div>
      <h3> {product.name} </h3>
      <p>{product.description}</p>
      <hr/>
      <h4>{product.status}</h4>  </div>;
  else
    productData = <h2> Sorry. Product doesnt exist </h2>;

  return (
    <div>
      <div>
        {productData}
      </div>
    </div>
  )
}

export default Product