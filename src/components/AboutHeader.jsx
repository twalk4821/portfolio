import React from 'react';
import Divider from 'material-ui/Divider';
import { blue900 } from 'material-ui/styles/colors';


const headerContent = "ABOUT ME";

const styles = {
  root: {
    margin: '10% 0 5% 0',
  },
  header: {
    textAlign: 'left',
    marginLeft: '10%',
    color: blue900,
  }
};

const AboutHeader = () => (
  <div className='aboutHeader' style={styles.root}>
    <h3 style={styles.header}>{headerContent}</h3>
    <Divider />
  </div>
);

export default AboutHeader;