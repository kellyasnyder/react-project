import React, { Component } from 'react';

class Contact extends Component {
  constructor() {
    super();
  }

      render() {
        return (
          <div className="contact">
            <h1>Have a question? Let us know.</h1>
            <hr style={{borderBottom: '1px #ccc solid', opacity: '0.3'}} />
            <p>We're here to help. Send us an email through the form below and we'll get back to you within 24-48 hours.</p>

            <form action="http://localhost:4000/form" method="POST">
            <label>
              First Name:<br />
              <input type="text" name="firstName" className="contactField" onChange={this.props.onChange}/>
            </label>
            <label>
              Last Name:<br />
              <input type="text" name="lastName" className="contactField" onChange={this.props.onChange}/>
            </label>
            <label>
              Email Address:<br />
              <input type="text" name="email" className="contactField" onChange={this.props.onChange}/>
            </label>
            <label>
              Comments:<br />
              <textarea className="contactText" placeholder="Questions, comments, concerns, etc..." name="comments" onChange={this.props.onChange}/>
            </label>
            <input type="submit" value="Submit" className="submitButton" />
          </form>
          </div>
        );
      }
    }

export default Contact;