import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import logo from '../assets/logo-white.png';

import './TopBar.css';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

const title = "Tyler Walker Projects";

const styles = {
  titleStyle: {
    cursor: "pointer",
    backgroundImage: logo,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "75px",
    height: "50px",
  },
  appBarStyle: {
    position: 'fixed',
    textAlign: 'left',
  },
  containerStyle: {
    marginTop: '50px',
  },
};




const scrollUp = () => {
  window.scrollTo(0,0);
}

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {scrollY: 0, open: false};
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleScroll() {
    const { scrollY } = window;
    this.setState({ scrollY });
  }

  handleClick(item) {
    if (item === "Projects") {
      window.scrollTo(0, document.querySelector('.projectsHeader').offsetTop-100);
      this.setState({ open: false });
    } else if (item === "Blog") {
      window.scrollTo(0, document.querySelector('.blogHeader').offsetTop-100);
      this.setState({ open: false });
    } else if (item === "Contact") {
      window.scrollTo(0, document.querySelector('.contactHeader').offsetTop-100);
      this.setState({ open: false });
    } else if (item === "About") {
      window.scrollTo(0, document.querySelector('.aboutHeader').offsetTop-100);
      this.setState({ open: false });
    }
  }

  render() {
    const { scrollY } = this.state;
    const classes = "top-bar" + (scrollY > 0 ? " transparent" : "");

    return (
      <div>
        <AppBar
          title="                "
          titleStyle={styles.titleStyle}
          className={classes}
          style={styles.appBarStyle}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={this.handleToggle}
          onTitleClick={scrollUp}
        />
        <img className="logo" src={logo} />
        <Drawer containerStyle={styles.containerStyle} className="drawer" docked={false} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
          <MenuItem onClick={() => this.handleClick("Projects")}>Projects</MenuItem>
          <MenuItem onClick={() => this.handleClick("Blog")}>Blog</MenuItem>
          <MenuItem onClick={() => this.handleClick("About")}>About me</MenuItem>
          <MenuItem onClick={() => this.handleClick("Contact")}>Contact</MenuItem>          
          <iframe src="https://open.spotify.com/embed?uri=spotify:user:1214482391:playlist:1PcqBhKoO26mYuLIzSuvKv" width="300" height="380" frameBorder="0" allowtransparency="true"></iframe>
        </Drawer> 
      </div>
    );
  }
}

export default TopBar;