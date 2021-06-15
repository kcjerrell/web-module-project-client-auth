import { Route, NavLink, useHistory } from 'react-router-dom';

import Login from './components/Login';
import './App.css';

function App() {
  const history = useHistory();

  const onLogin = () => {
    history.push("/friends");
  }

  return (
    <div className="App">

      <header className="App-header">
        <h1>Auth Friends</h1>
        <nav>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/friends">Friends</NavLink>
        </nav>
      </header>

      <div className="App-content">
        <Route path="/login" exact>
          <Login onSuccess={onLogin}/>
        </Route>
      </div>

      <div className="App-backdrop" />
    </div>
  );
}

export default App;
