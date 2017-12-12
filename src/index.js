import React from 'react';
import ReactDOM from 'react-dom';
import {fade} from 'material-ui/utils/colorManipulator';
import {blue900 as themeColor} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const muiTheme = getMuiTheme({
  palette: {
    textColor: themeColor,
  },
  fontFamily: 'Roboto, Helvetica, sans-serif',
  appBar: {
    height: 50,
    color: themeColor,
  },
  toggle: {
    thumbOnColor: themeColor,
    trackOnColor: fade(themeColor, 0.5),
  },
});

const Root = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
