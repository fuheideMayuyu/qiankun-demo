import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router basename="/react">
      <Link to="/">首页</Link>
      <Link to="/about">about</Link>
      <Route path="/" render={() =><h1>home页面</h1>}></Route>
      <Route path="/about" render={() =><h1>about页面</h1>}></Route>
    </Router>
  
  );
}

export default App;
