import React from "react";
import {Link, Route} from 'react-router-dom';

const SubCategory = (props) => {
  //console.log(JSON.stringify(props, null, 2));
  const {match} = props;
  return (<div><h3> {match.params.name} </h3></div>)
}


const Category = (props) => {
  //console.log(JSON.stringify(props, null, 2));
  const {match} = props;
  return (
    <div>
      <ul>
        <li><Link to={`${match.url}/shoes`}>Shoes</Link></li>
        <li><Link to={`${match.url}/boots`}>Boots</Link></li>
        <li><Link to={`${match.url}/footwear`}>Footwear</Link></li>

      </ul>
      <Route path={`${match.path}/:name`} component={SubCategory}/>
    </div>
  )
}
export default Category;