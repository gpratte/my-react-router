import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Category from './Category'
import Products from './Products'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">

            <li><Link to="/">Home</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/products">Products</Link></li>

          </ul>
        </nav>

        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/category" component={Category}/>
          <Route path="/products" component={Products}/>
        </Switch>

      </div>
    )
  }
}

export default App;
