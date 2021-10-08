import React from 'react';
import AboutHeader from './AboutHeader';

const styles = {
  content: {
    textAlign: "left",
    margin: "0% 10%",
    padding: "2.5% 5% 2.5% 5%",
    backgroundColor: "white",
    lineHeight: 1.5,
    maxWidth: 1000
  },
  container: {
    backgroundColor: "white",
    display: 'flex',
    justifyContent: 'center'
  },
}
const About = () => (
  <div>
    <AboutHeader />
    <div className="about" style={styles.container}>
    <div style={styles.content}>
      Hello, I'm Tyler. I am a mobile developer with specialization in both of the major mobile platforms (Android and iOS). I also have experience doing cross-platform development using React Native.<br/><br/>
      
      One of the things I like about Android as a platform is there seems to be a lot more innovative development on it, so some of the tools are cutting-edge and fun to use. For instance, setting up a system of Observables using RxJava or injecting dependencies with Dagger 2. 
      Some of the tech I'm familiar with:<br/>
      <ul>
      • Kotlin 
      • RxJava
      • Dagger 2
      • Android Architecture Components
      • Constraint Layout
      • Retrofit
      • OkHttp3
      </ul>
      On the iOS platform, I am comfortable with Swift and also have exposure to Objective C.<br/>
      Some familiar tech:<br/>
      <ul>
      • UIKit
      • AVKit
      • SpriteKit
      • RxSwift
      • Autolayout
      • Firebase
      • Alamofire
      </ul>
      I also have a background in Web Development, and have built a number of websites and single page applications:<br/>
      <ul>
      • React
      • Redux
      • Angular
      • Node
      • MongoDB
      • PostgreSQL
      </ul>
      Finally, I have some experience and interest in machine learning, having leveraged TensorFlow, TensorFlow Lite, and TensorFlow.js to build several apps.<br/><br/>
      My first experience coding was building a C++ calculator at the age of 6 (with some oversight from my Dad). The aspects of coding about which I am most passionate are: 
      analytical problem solving, building useful abstractions, and how to write code expressively. In my spare time I like to write (mostly journaling), make and play music, study Japanese, and exercise (weight training, running and biking).
      </div>
    </div>
  </div>
);

export default About;