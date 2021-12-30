import React from 'react';
import Divider from 'material-ui/Divider';
import { blue900 } from 'material-ui/styles/colors';

const headerContent = "BLOG POSTS";

const styles = {
  root: {
    margin: '10% 0 10px 0',
  },
  header: {
    color: blue900,
  }
};

const ContactHeader = ({ text, margin }) => (
  <div className='header blogHeader' style={{ margin: margin ?? styles.root.margin}}>
    <h3 style={styles.header}>{text ?? headerContent}</h3>
    <Divider />
  </div>
);

export default ContactHeader;