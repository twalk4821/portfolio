import React from 'react';
import Divider from 'material-ui/Divider';
import { blue900 } from 'material-ui/styles/colors';

const headerContent = "MY PROJECTS";

const styles = {
  root: {
    margin: '0 0 5% 0',
    marginTop: 'calc(100vh - 25vmax - 20vh - 4vmax)'
  },
  header: {
    textAlign: 'left',
    marginLeft: '10%',
    color: blue900,
  }
};

const ProjectsHeader = () => (
  <div className='projectsHeader' style={styles.root}>
    <h3 style={styles.header}>{headerContent}</h3>
    <Divider />
  </div>
);

export default ProjectsHeader;