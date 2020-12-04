import './App.css';
import HomePage from './pages/homepage/homepage.jsx'
import { Switch ,Route} from 'react-router-dom'
import ShopPage from './pages/shop/shop.jsx'
import Header from './components/header/header.jsx'


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        {/* <Route path='/shop/hats' component={HatsPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
