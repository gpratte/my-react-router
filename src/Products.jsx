import React from "react";
import productsData from './product-data'
import {Link, Route} from 'react-router-dom';
import Product from './Product'

const Products = ({match}) => {

  const linkList = productsData.map((product) => {
    return (
      <li key={product.id}>
        <Link to={`${match.url}/${product.id}`}>
          {product.name}
        </Link>
      </li>
    )
  })

  return (
    <div>
      <div>
        <h3> Products</h3>
        <ul> {linkList} </ul>
      </div>
      <Route path={`${match.url}/:productId`}
             render={(props) => <Product {...props} />}/>
      <Route exact path={match.url}
             render={() => (
               <div>Please select a product.</div>
             )}
      />
    </div>
  )
}

export default Products
