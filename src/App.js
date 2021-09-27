import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import './App.css';
import Headers from './components/Headers';
import ProductDetails from './components/ProductDetails';
import ProductListing from './components/ProductListing';

function App() {
  return (
    <div className="app">
      <Router>
        <Headers />
        <Switch>
          <Route path="/" exact component={ProductListing} /> 
          <Route path="/product/:productId" exact component={ProductDetails} /> 
          <Route > 404 Not found!</Route> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
