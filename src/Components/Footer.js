import React, { Component } from 'react';
import NavBar from './NavBar';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div style={{width: "50%", margin: "auto"}}>
        <p style={{paddingBottom: "35px"}}>
            <b>&copy; NANDAMADE 2018. All Rights Reserved.</b> This site is for educational purposes only. 
            Copyright Disclaimer under section 107 of the Copyright Act 1976, allowance is made for "fair use" 
            for purposes such as criticism, comment, news reporting, teaching, scholarship, education and research. 
            Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, 
            educational or personal use tips the balance in favor of fair use.
        </p>
        <hr style={{opacity: "0.3"}}/>
        <div className="footerLinks">
            <NavBar></NavBar>
        </div>
        </div>
      </footer>
    )
  }
}
export default Footer;