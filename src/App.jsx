import { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Home from './components/Home';
import OrderPizza from './components/OrderPizza';
import Success from './components/Success';
import './App.css';

function App() {
  const [orderResponse, setOrderResponse] = useState(null);
  const history = useHistory();

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home history={history} />
        </Route>
        
        <Route path="/pizza">
          <OrderPizza setOrderResponse={setOrderResponse} />
        </Route>

        <Route path="/success">
          <Success data={orderResponse} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;