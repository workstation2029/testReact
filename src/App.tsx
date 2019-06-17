import * as React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.scss';
import MainFooter from './components/MainFooter/MainFooter';
import MainHeader from './components/MainHeader/MainHeader';
import MainLogin from './components/MainLogin/MainLogin'
import ProductList from './components/ProductList/ProductList';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <MainHeader />
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={ProductList} />
            <Route path="/login" component={MainLogin} />
          </Switch>
        </BrowserRouter>
        <MainFooter />
      </div>
    );
  }
}

export default App;
