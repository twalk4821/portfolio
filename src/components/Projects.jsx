import React from 'react';

import ProjectsHeader from './ProjectsHeader';
import ProjectTile from './ProjectTile';

import kelsi from '../assets/kelsi.png';
import trendline from '../assets/trendline.png';
import wizards from '../assets/wizards.png';
import parkbound from '../assets/parkbound.png';
import ground from '../assets/ground.png';

const row1 = [
  {
    id: 1,
    img: trendline,
    title: 'Trendline Motorsport',
    subtitle: 'A Specialty Site for Car Enthusiasts',
    description: `I built this site from the ground up using React, Redux, Postgres and Node (the lesser known "RRPN" stack). The site features an extensive
    storefront with multi-tiered categorical organization, search, a chatbot, ability to make purchases and handle orders,
    secure account information, and more.`,
    url: 'http://trendlinemotorsport.com',
  },
  {
    id: 5,
    img: kelsi,
    title: 'Kelsi Yuan Design',
    subtitle: 'A Personalized Design Portfolio',
    description: `A graphic design portfolio I built using React following the specifications of the designer. We aimed for minimalism and function, while maintaining elegance. The portfolio features subtle animations,
    as well as React Router to fascilitate navigating between multiple portfolio pages.`,
    url: 'http://kelsiyuan.com',
  },
];

const row2 = [
  {
    id: 2,
    img: parkbound,
    title: 'Parkbound',
    subtitle: 'A National Parks Trip Planner',
    description: `This is a robust National Parks application built from the ground up by myself and a few teammates. A clean and intuitive front
    end interface belies the robust data infrastructure which underlies it, the creation of which required integration of data from a range of sources,
    including public APIs and random CSV files. The application features the ability to sort and filter parks by the types of activities available
    there, integration with Fitbit for trails recommendations, as well as offering the option to purchase national passes right from the site.`,
    url: 'http://parkbound.herokuapp.com',
  },
  {
    id: 4,
    img: wizards,
    title: 'Wizards Chess',
    subtitle: 'Chess with Voice Command',
    description: `Inspired by the book Harry Potter, this web application utilizes the Chrome implementation of the Javascript Speech Recognition API. This allows chess wizards 
    to issue speak commands to dictate events on the board. The game features a rudimentory ai
    which I implemented myself using the min-max algorithm for optimizing future board states, as well as supports the ability to play locally with 
    a friend.`,
    url: 'http://wizardschess.club',
  },
  {
    id: 3,
    img: ground,
    title: 'Common Ground',
    subtitle: 'A Meetup Location Finder',
    description: `Another application built from the "ground" up with members of the Parkbound team, this application lets you choose up to 8 starting locations,
    called "anchors", and utilizes a mathematical algorithm to find optimal meeting places based on minimum travel time for all parties. The returned results
    are from the Yelp API, and travel times are discovered with the help of the Google Maps and Distance Matrix APIs. The tech stack includes
    an Angular front end, Postgres database, as well as a Node server.`,
    url: 'http://findcommonground.herokuapp.com',
  },
]

const styles = {
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },

}

const Projects = () => (
  <div className="projects">
    <ProjectsHeader />
    <div style={styles.grid} className="projects-grid">
      {row1.map(tile => (
        <ProjectTile style={styles.tile} tile={tile} key={tile.title} />
      ))}
    </div>
    <div style={styles.grid} className="projects-grid">
      {row2.map(tile => (
        <ProjectTile style={styles.tile} tile={tile} key={tile.title} />
      ))}
    </div>
  </div>
);

export default Projects;