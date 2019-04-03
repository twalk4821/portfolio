import React from 'react';

import ProjectsHeader from './ProjectsHeader';
import ProjectTile from './ProjectTile';

import kanjiIOS from '../assets/kanji-ios.jpg';
import kanjiAndroid from '../assets/kanji-android.png'
import kelsi from '../assets/kelsi.png';

const row1 = [
  {
    id: 1,
    img: kanjiAndroid,
    title: 'Kanji Reader Android',
    subtitle: 'Japanese Character Recognition',
    description: `This app began from my passion for Japanese. I wanted a simple application which could 
    scan an image of a character, and be able to identify the character and provide its readings and translations.
    I have coursework in machine learning, so I was able to design a convolutional neural network with Tensorflow, 
    and then convert the model to a more portable size using TensorFlow Lite. The app features black or white writing detection, and
    accurately classifies over 2000 characters with 90% accuracy. It is available as a free download on the Google Play Store.
    
    UI Design by Kelsi Yuan: http://jingwu-yuan.com`,
    url: 'https://play.google.com/store/apps/details?id=tylerwalker.io.kanjireader',
  },
  {
    id: 2,
    img: kanjiIOS,
    title: 'Kanji Reader iOS',
    subtitle: 'Japanese Character Recognition',
    description: `This is the iOS port of Kanji Reader, which was originally designed for the Android platform.
    It's features and interface are identical to that of the original Android Version.

    UI Design by Kelsi Yuan: http://jingwu-yuan.com`,
    url: 'https://itunes.apple.com/us/app/kanji-reader/id1457506025?mt=8',
  },
  {
    id: 3,
    img: kelsi,
    title: 'Kelsi Yuan Design',
    subtitle: 'A Personalized Design Portfolio',
    description: `A graphic design portfolio I built using React following the specifications of the designer. We aimed for minimalism and function, while maintaining elegance. The portfolio features subtle animations,
    as well as React Router to fascilitate navigating between multiple portfolio pages.`,
    url: 'http://kelsiyuan.com',
  },
];

const styles = {
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '100px'
  }
}

const Projects = () => (
  <div className="projects">
    <ProjectsHeader />
    <div style={styles.grid} className="projects-grid">
      {row1.map(tile => (
        <ProjectTile style={styles.tile} tile={tile} key={tile.title} />
      ))}
    </div>
  </div>
);

export default Projects;