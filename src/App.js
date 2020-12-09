import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import NotFound from './components/notfound';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import SearchPage from './components/searchpage';



function App() {
  return (
    <div className="App">
      <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login"><Login/></Route>

          <Route path="/signup"><Signup/></Route>

          <Route path="/search"><SearchPage/></Route>

          {/* <Route path="/dashboard"><Home/></Route> */}

          <Route exact path="/"><Login/></Route>

          <Route><NotFound/></Route>

                
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
