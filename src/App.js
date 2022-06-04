import './App.css';
import Header from './Header/Header';
import Login from './Login/Login';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home/Home';
import Dashboard from './dashboard/Dashboard';
import Tavolina1 from './dashboard/Tavolina1'
function App() {
  return (
    <Router>
    <div className="App">
     <Header/>
      <Switch>
       <Route exact path = "/" component = {Home} />
       <Route exact path = "/login" component = {Login}/>
       <Route exact path = "/dashboard" component = {Dashboard}/>
       <Route exact path = "/tavolina1" component = {Tavolina1}/>

      </Switch>
    </div>
    </Router>
  )
}

export default App;
