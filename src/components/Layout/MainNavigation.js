import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

 const userIsLoggedIn = authCtx.isLoggedIn;

 const onLogoutHandler = () =>
 {
  authCtx.logout();
 }

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>Eniola Auth</div>
      </Link>
      <nav>
        <ul>
         {!userIsLoggedIn && <li>
            <Link to='/auth'>Login</Link>
          </li>}
          {userIsLoggedIn && <li>
            <Link to='/profile'>Profile</Link>
          </li>}
         {userIsLoggedIn && <li>
            <button onClick={onLogoutHandler}>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
