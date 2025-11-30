import React, { useState } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { blue900 } from 'material-ui/styles/colors';
import CircularProgress from 'material-ui/CircularProgress';
import Snackbar from 'material-ui/Snackbar';
import ContactHeader from './ContactHeader';
import './Contact.css';
import gmail from '../assets/gmail.jpeg'

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

const Contact = ({ showScroller, hideScroller }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [messages, setMessages] = useState({
    name: "",
    email: "",
    body: "",
  });
  const [sending, setSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (propertyName, value) => {
    if (propertyName === 'name') {
      setName(value);
    } else if (propertyName === 'email') {
      setEmail(value);
    } else if (propertyName === 'body') {
      setBody(value);
    }
  };

  const validEmail = (email) => {
    return email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  };

  const handleClick = () => {
    if (name.length === 0) {
      setMessages({ name: "Name is a required field.", email: messages.email, body: messages.body });
      return;
    }

    if (email.length === 0) {
      setMessages({ name: messages.name, email: "Email is a required field.", body: messages.body });
      return;
    }

    if (body.length === 0) {
      setMessages({ name: messages.name, email: messages.email, body: "Tell me what you're working on." });
      return;
    }

    if (!validEmail(email)) {
      setMessages({ name: messages.name, email: "Must be a valid email address.", body: messages.body });
      return;
    }

    setSending(true);
    window.emailjs.send('gmail','template', { name, email, body })
    .then(res => {
      setSending(false);
      if (res.status === 200) {
        setSuccessMessage("Your message was sent successfully! I'll get back to you as soon as I can.");
      } else {
        setSuccessMessage("There was a problem sending your message.");
      }
    });
  };

  const { name: nameMsg, email: emailMsg, body: bodyMsg } = messages;
  const nameMessage = nameMsg ? nameMsg : "";
  const emailMessage = emailMsg ? emailMsg : "";
  const bodyMessage = bodyMsg ? bodyMsg : "";

  if (sending) {
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
      <RaisedButton style={styles.button} onClick={() => window.open('mailto:tyjohnwalker@gmail.com')}><img src={gmail} /></RaisedButton>
      </div>
      </div>
    </div>
  )
}

export default Contact;