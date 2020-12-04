import './App.css';
import HomePage from './pages/homepage/homepage.jsx'
import {Route} from 'react-router-dom'
import ShopPage from './pages/shop/shop.jsx'



function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      {/* <Route path='/shop/hats' component={HatsPage} /> */}
    </div>
  );
}

export default App;
