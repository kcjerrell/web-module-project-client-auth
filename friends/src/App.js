import { Route, NavLink, useHistory } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import loremIpsum from './util/loremIpsum'
import './App.css';
import { hasToken, removeToken } from './util/axiosWithAuth';
import { useState } from 'react';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(hasToken());

  const history = useHistory();
  const onLogin = () => {
    setIsLoggedIn(true);
    history.push("/friends");
  }

  const logOut = () => {
    removeToken();
    setIsLoggedIn(false);
  }

  return (
    <div className="App">

      <header className="App-header">
        <h1>
          <NavLink to="/">
            Auth Friends
          </NavLink>
        </h1>
        <nav>
          {!isLoggedIn && <NavLink to="/login">Login</NavLink>}
          {isLoggedIn &&
            <>
            <NavLink to="/friends">Friends</NavLink>
            <NavLink to="/" onClick={() => logOut()}>Log Out</NavLink>
            </>
          }
        </nav>
      </header>

      <div className="App-content">
        <Route path="/" exact>
          {loremIpsum(3)}
        </Route>

        <Route path="/login" exact>
          <Login onSuccess={onLogin} />
        </Route>

        <PrivateRoute path="/friends" exact component={FriendsList} />
      </div>

      <div className="App-backdrop" />
    </div>
  );
}

export default App;
