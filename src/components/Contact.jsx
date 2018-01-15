import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { blue900 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import Snackbar from 'material-ui/Snackbar';
import ContactHeader from './ContactHeader';
import './Contact.css';

const styles = {
  errorStyle: {
    color: blue900,
  },
  underlineStyle: {
    borderColor: blue900,
  },
  floatingLabelStyle: {
    color: blue900,
  },
  floatingLabelFocusStyle: {
    color: blue900,
  },
  button: {

  },
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      body: "",
      messages: {
        name: "",
        email: "",
        body: "",
      },
      sending: false,
      successMessage: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e, propertyName) {
    this.setState({
      [propertyName]: e.target.value
    });
  }

  handleClick() {
    if (this.state.name.length === 0) {
      const { email, body } = this.state.messages;
      const name = "Name is a required field.";
      this.setState({ messages: { name, email, body }});
      return;
    }

    if (this.state.email.length === 0) {
      const { name, body } = this.state.messages;
      const email = "Email is a required field.";
      this.setState({ messages: { name, email, body }});
      return;
    }

    if (this.state.body.length === 0) {
      const { email, name } = this.state.messages;
      const body = "Tell me what you're working on.";
      this.setState({ messages: { name, email, body }});
      return;
    }

    if (!this.validEmail(this.state.email)) {
      const { name, body } = this.state.messages;
      const email = "Must be a valid email address.";
      this.setState({ messages: { name, email, body }});
      return;
    }

    const { name, email, body } = this.state;

    this.setState({ sending: true });
    window.emailjs.send('gmail','template', { name, email, body })
    .then(res => {
      this.setState({ sending: false });
      if (res.status === 200) {
        this.setState({ 
          successMessage: "Your message was sent successfully! I'll get back to you as soon as I can."
        });
      } else {
        this.setState({ 
          successMessage: "There was a problem sending your message."
        });
      }
    });
  }

  validEmail(email) {
    return email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  }

  render() {
    const { name, email, body } = this.state.messages;
    const nameMessage = name ? name : "";
    const emailMessage = email ? email : "";
    const bodyMessage = body ? body : "";

    if (this.state.sending) {
      return (
        <div>
          <ContactHeader />
          <div className="contact-container">
            <div className="contact tall">
              <CircularProgress className="progress" size={80} thickness={5} />
            </div>
          </div>
        </div>
      )
    }

    return (
      <div>
        <ContactHeader />
        <div className="contact-container">
        <div className="contact">
          <TextField
            className="name"
            errorText={nameMessage}
            errorStyle={styles.errorStyle}
            floatingLabelText="Name"
            floatingLabelStyle={styles.floatingLabelStyle}
            onChange={e => this.handleChange(e, "name")}
            onFocus={this.props.hideScroller}
            onBlur={this.props.showScroller}
            type="text"
          />
          <TextField
            className="email"
            errorText={emailMessage}
            errorStyle={styles.errorStyle}
            floatingLabelText="Email"
            floatingLabelStyle={styles.floatingLabelStyle}
            onChange={e => this.handleChange(e, "email")}
            onFocus={this.props.hideScroller}
            onBlur={this.props.showScroller}
            text="email"
          />
          <TextField
            className="message"
            hintText="Tell me about what you're working on/need help with."
            hintStyle={styles.errorStyle}
            errorText={bodyMessage}
            errorStyle={styles.errorStyle}
            floatingLabelText="Message"
            floatingLabelStyle={styles.floatingLabelStyle}
            multiLine={true}
            rows={5}
            onChange={e => this.handleChange(e, "body")}
            onFocus={this.props.hideScroller}
            onBlur={this.props.showScroller}
            type="text"
          />
          <RaisedButton 
            className="button"
            label="Send" 
            style={styles.button}
            onClick={this.handleClick} 
          />
          <Snackbar
            open={this.state.successMessage.length > 0}
            message={this.state.successMessage}
            autoHideDuration={10000}
            onRequestClose={this.handleRequestClose}
          />
        </div>
        </div>
      </div>
    )
  }
}

export default Contact;