import './App.css';
import Header from './components/header/Header';
import CurrencyListView from './components/currencylist/CurrencyListView';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
       <div className="App">
          <Header />
          <Switch>
            <Route path='/' exact render= {(props) => (
              <CurrencyListView {...props} />
            )} />
          </Switch>
          
        </div>
    </Router>

  );
}

export default App;
