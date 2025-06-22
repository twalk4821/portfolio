import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-V7N6ZVC5YJ'); // replace with your Measurement ID
};

export const logPageView = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};
