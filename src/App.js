import {Redirect, Switch, Route} from 'react-router-dom'
import Login from "./components/Login";
import Home from "./components/Home";
import {useSelector} from "react-redux";
import {selectUserName} from "./feature/user/userSlice";


function App() {
    const username = useSelector(selectUserName);

  return (
      <Switch>
          <Route path='/' exact>
              <Login />
          </Route>
          <Route path='/home'>
              {username ? <Home /> : <Redirect to='/' />}
          </Route>
      </Switch>
  );
}

export default App;
