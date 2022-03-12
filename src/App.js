import './App.css';
import Header from './Header/Header';
import Login from './Login/Login';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home/Home';

function App() {
  return (
    <Router>
    <div className="App">
     <Header/>
      <Switch>
       <Route exact path = "/" component = {Home}/>
       <Route exact path = "/login" component = {Login}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
