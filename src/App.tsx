import * as React from 'react';
import './App.scss';
import MainFooter from './components/MainFooter/MainFooter';
import MainHeader from './components/MainHeader/MainHeader';
import ProductList from './components/ProductList/ProductList';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <MainHeader />
        <ProductList />
        <MainFooter />
      </div>
    );
  }
}

export default App;
