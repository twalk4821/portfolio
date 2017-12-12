import React, { Component } from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

import eye from '../assets/eye.png';
import arrow from '../assets/arrow.png';

import './ProjectTile.css';


let styles = {
  tile: {
    width: '300px',
    height: '250px',
    marginBottom: '100px',
    marginRight: '10px',
  },
  img: {
    height: '250px',
  },
  overlay: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    height: '75px',
    background: 'rgba(0, 0, 0, 0.54)',
  },
  paper: {
    width: '300px',
    height: '310px',
  },
  title: {
    fontSize: '16px',
    lineHeight: '150%',
    fontWeight: 'bold',
    letterSpacing: '1px',
  },
  description: {
    textAlign: 'left',
    height: '200px',
  },
  view: {
    backgroundImage: `url(${eye})`,
    backgroundSize: '40% 80%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  close: {
    backgroundImage: `url(${arrow})`,
    backgroundSize: '40% 80%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },

};

class ProjectTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange(expanded) {
    styles.tile.marginBottom = expanded ? '400px' : '100px';
    styles.paper.height = expanded ? '670px' : '310px';
    this.setState({ expanded });
  };
  handleToggle = (event, toggle) => {
    this.handleExpandChange(toggle);
  };

  handleReduce = () => {
    this.handleExpandChange(false);
  };

  render() {
    const { id, img, title, subtitle, description, url } = this.props.tile;
    const { expanded } = this.state;

    const descriptionClass = "description" + (expanded ? " expanded" : "");
    const titleClass = "title" + (expanded ? " expanded" : "");

    return (
      <div className="tile">
      <Paper style={styles.paper} zDepth={3}>
      <Card style={styles.tile} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardMedia
          style={styles.img}
          overlay={<CardTitle title={title} subtitle={subtitle} />}
          overlayContentStyle={styles.overlay}
        >
          <img src={img} alt={title} style={styles.img} />
        </CardMedia>
        <CardText>
          <Toggle
            toggled={this.state.expanded}
            onToggle={this.handleToggle}
            labelPosition="left"
            label={this.state.expanded ? " " : "See more"}
          />
        </CardText>
        <CardTitle className={titleClass} title={`${id}. ${title}`.toUpperCase()} subtitle={subtitle} titleStyle={styles.title} expandable={true} />
        <CardText className={descriptionClass} expandable={true} style={styles.description}>
          {description}
        </CardText>
        <CardActions expandable={true}>
          <FlatButton style={styles.view} label=" " href={url} />
          <FlatButton style={styles.close} label=" " onClick={this.handleReduce} />
        </CardActions>
      </Card>
      </Paper>
      </div>
    );
  }
}

export default ProjectTile;