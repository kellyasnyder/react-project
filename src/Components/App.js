import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from './Homepage';
import Contact from './Contact';
import Clothes from './Clothes';
import NavBar from './NavBar';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="Homepage" exact path="/" component={Homepage} />
          <Route name="Contact" exact path="/contact" component={Contact} />
          <Route name="Clothes" exact path="/clothes" component={Clothes} />
          <Footer />
        </div>
      </Router>
    )
  }
}
export default App;