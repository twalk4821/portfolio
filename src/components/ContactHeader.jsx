import React from 'react';
import Divider from 'material-ui/Divider';
import { blue900 } from 'material-ui/styles/colors';

const headerContent = "CONTACT";

const styles = {
  root: {
    margin: '10% 0 10px 0',
  },
  header: {
    textAlign: 'left',
    marginLeft: '10%',
    color: blue900,
  }
};

const ContactHeader = () => (
  <div className='contactHeader' style={styles.root}>
    <h3 style={styles.header}>{headerContent}</h3>
    <Divider />
  </div>
);

export default ContactHeader;