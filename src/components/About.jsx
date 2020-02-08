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
    <p style={styles.content}>
      Hello, I'm Tyler. I am a mobile developer with specialization in both mobile platforms Android and iOS. I have experience with cross-platform development using React Native as well as experience with native development on each platform.<br/><br/>
      
      On the Android platform, I enjoy working with the latest technologies which always seem just a step ahead of what is available on iOS. 
      Android Skills include (but are not limited to):<br/>
      <ul>
      • Kotlin 
      • RxJava
      • Dagger 2
      • Android Architecture Components
      • Constraint Layout
      • Retrofit
      • OkHttp3
      </ul>
      On the iOS platform, I am comfortable with Swift programming, and have exposure to such technolgies as:<br/>
      <ul>
      • UIKit
      • AVKit
      • RxSwift
      • Autolayout
      • Firebase
      • Alamofire
      </ul>
      I also have a background in Web Development, and have built a number of websites and SPAs (single page applications)
      using such technologies as:<br/>
      <ul>
      • React
      • Redux
      • Angular
      • Node
      • MongoDB
      • PostgreSQL
      </ul>
      Finally, I have some experience and interest in machine learning, having leveraged TensorFlow, TensorFlow Lite, and TensorFlow.js to build the above mentioned Kanji Reader apps.<br/><br/>
      My first experience coding was building a C++ calculator at the age of 6 (with some oversight from my Dad). The aspects of coding about which I am most passionate are: 
      analytical problem solving, building useful abstractions, and communicating intent through code. In my spare time I like to write, create and play music, study Japanese, and exercise (particularly
      long distance running).
      </p>
    </div>
  </div>
);

export default About;