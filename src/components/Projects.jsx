import React from 'react';

import ProjectsHeader from './ProjectsHeader';
import ProjectTile from './ProjectTile';

import psapp from '../assets/psapp.webp'
import greenhouse from '../assets/greenhouse.png'
import spellsTrouble from '../assets/spells.webp'
import societi from '../assets/societi.png'
import kanjiIOS from '../assets/kanji-ios.jpg';
import kanjiAndroid from '../assets/kanji-android.png'
import defcon5 from '../assets/defcon5.png'

const row1 = [
  {
    id: 0,
    img: psapp,
    title: 'PSApp',
    subtitle: 'Ecommerce and Social App',
    description: `Brand new flagship app developed specially for the PS5 console.
    As a cross-platform developer, I worked on both the iOS and Android versions of this app.
    I worked extensively on the native store, as well as on a cross-platform server called
    GraphQL.`,
    url: 'https://play.google.com/store/apps/details?id=com.scee.psxandroid'
  },
  {
    id: 1,
    img: greenhouse,
    title: 'Wells Fargo',
    subtitle: 'Mobile Banking App',
    description: `This is the first app I worked on as a full-time developer. At Wells Fargo, Working on the
    Android adaptation of the existing iOS Greenhouse app, I got to be exclusively in-charge of 
    the implementation of key features of the application. Primarly, I owned the "Shuffle" feature of
    the app, which showcases rows of sliders (SeekBars) enabling users to intuitively shuffle money
    around to various partitions. I designed the implementation to be "reactive" by employing Android's
    LiveData and Data-Binding APIs.`,
    url: 'https://play.google.com/store/apps/details?id=com.wf.wellsfargomobile'
  },
  {
    id: 2,
    img: spellsTrouble,
    title: 'Spells Trouble',
    subtitle: 'iOS/macOS Cross-Platform Edutainment',
    description: `An educational game for learning spelling, where letters are scattered throughout the level,
    which once collected must be unscrambled to solve each puzzle. The idea hearkens back to educational games of the 90s, 
    where simple level progression elements and storytelling were combined with intellectual challenges. 
    The code and soundtrack were made by myself, while the artwork was produced by my partner.`,
    url: 'https://apps.apple.com/us/app/spells-trouble/id6751154201'
  },

  {
    id: 3,
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
    id: 4,
    img: kanjiIOS,
    title: 'Kanji Reader iOS',
    subtitle: 'Japanese Character Recognition',
    description: `This is the iOS port of Kanji Reader, which was originally designed for the Android platform.
    It's features and interface are identical to that of the original Android Version.

    UI Design by Kelsi Yuan: http://jingwu-yuan.com`,
    url: 'https://itunes.apple.com/us/app/kanji-reader/id1457506025?mt=8',
  },
  {
    id: 5,
    img: societi,
    title: 'Societi',
    subtitle: 'Live TV Trivia',
    description: `I worked as a freelancer with full ownership of the Android implementation of this app. 
    I took the project because I believed the idea to be quite ingenious: you answer questions about the given tv show
    or sporting event before it happens, making predictions about what you believe will happen, and are awarded payouts 
    based on correct predictions. For this app I followed an architectural strategy of MVP, with Retrofit as the HTTP client
    and invoking callbacks to update the UI. It is a Kotlin app, and I also employed Constraint Layout for most screens as well as some RxJava
    for managing asynchronous subscriptions.`,
    url: 'https://play.google.com/store/apps/details?id=com.Societi&hl=en_US',
  },
  {
    id: 6,
    img: defcon5,
    title: 'VR Control Panel',
    subtitle: 'Virtual Reality Management Software',
    description: `Web client software for managing VR sessions. Features include real-time polling of VR simulator data, 
    ability to manipulate and manage VR stations with sessions in progress, as well as organized administration of session
    and client data. The software was built using Angular as the client-side framework.`,
    url: 'http://www.defcon5studios.com/vr-simulation/',
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