import React from 'react';
import Profile from './components/user/Profile'
import Wishlist from './components/user/Wishlist'
import {Switch, Route, Redirect} from 'react-router-dom';
import Register from './components/user/Register';
import Login from './components/user/Login';
import Hello from "./components/hello";
import Product from "./components/product/ProductCategory";
import Dashboard from "./components/user/Dashboard";
import Logout from "./components/user/Logout";
import Home from "./components/home/Home";
import GpuPage from "./components/product/GPU/GpuPage";
const Routes = () => (
  <Switch>
    <Route exact path= '/' component={Home}/>
    {/* <Route exact path={["/", "/hello"]} component={Hello} /> */}
    <Route path= '/Product' component={Product}/>
    <Route path= '/login' component={Login}/>
    <Route path= '/register' component={Register}/>
    <Route path="/gpu" component={GpuPage}/>
    {/* Private Route */}
    <PrivateRoute path="/dashboard" component={Dashboard}/>
    <PrivateRoute path= '/profile' component={Profile}/>
    <PrivateRoute path= '/wishlist' component={Wishlist}/>
    <PrivateRoute path= '/logout' component={Logout}/>
  </Switch>
)

function PrivateRoute({component: Component, authed, ...rest}) {

  return (
      <Route {...rest} render={(props) => (
          localStorage.getItem('isLoggedIn') === 'true'
              ? <Component {...props} />
              : <Redirect to={{
                  pathname: '/login',
                  state: {from: props.location}
              }}/>
      )}/>

  )
}

export default Routes;
