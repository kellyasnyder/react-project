import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import auth0Client from '../Auth0/Auth';

function NavBar(props) {
    const signOut = () => {
      auth0Client.signOut();
      props.history.replace('/');
    };

    return (
      <header>
        <ul className="headerButtons">
          <li className="navButton"><Link to="/">Home</Link></li>
          <li className="navButton"><Link to="/clothes">Nandamade</Link></li>
          <li className="navButton"><Link to="/contact">Contact</Link></li>
          {
            !auth0Client.isAuthenticated() &&
              <li className="navButton" onClick={auth0Client.signIn}><a>Sign In</a></li>
          }
          {
            auth0Client.isAuthenticated() &&
            <div>
                <li className="navButton"><Link to="/admin">Admin</Link></li>
                {/* <li className="navButton" onClick={() => {signOut()}}><a>Sign Out</a></li> */}
            </div>
          }
        </ul>
      </header>
    )
  }

export default withRouter(NavBar);