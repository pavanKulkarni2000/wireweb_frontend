import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import DesignPage from './Components/DesignPage';
import HomePage from './Components/HomePage';
import SignInForm from './Components/SignIn';
import SignUpForm from './Components/SignUp';

const App =()=> {
  const [user, setUser] = useState(null);
  // const [user, setUser] = useState({id: '610e409c22871b111587825f', name: 'Pavan K R'});
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/" exact><HomePage
              user={user} /></Route>
            <Route path="/home"><HomePage
              user={user} /></Route>
            <Route path="/design"><DesignPage
              user={user} /></Route>
            <Route path="/signin"><SignInForm
              setUser={setUser} /></Route>
            <Route path="/signup"><SignUpForm
              setUser={setUser} /></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
