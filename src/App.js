import './App.css';
import HomePage from './pages/homepage/homepage.jsx'
import {Route} from 'react-router-dom'


const HatsPage = () => (
  <div>
    <h1>Hat Page</h1>
  </div>
)


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage} />
      <Route path='/shop/hats' component={HatsPage} />
    </div>
  );
}

export default App;
