import React from 'react';
import AboutHeader from './AboutHeader';

const styles = {
  content: {
    textAlign: "left",
    margin: "0% 10%",
    padding: "2.5% 5% 2.5% 5%",
    backgroundColor: "white",
    lineHeight: 1.5,
  },
  container: {
    backgroundColor: "white",
  },
}
const About = () => (
  <div>
    <AboutHeader />
    <div className="about" style={styles.container}>
    <p style={styles.content}>
      Hello, I'm Tyler. I am a mobile developer with specialization in Android and iOS. On the Android platform, I am comfortable working with 
      Java or Kotlin, and have exposure to many of the latest and best technologies for the platform, such as RxJava, Dagger 2, Android Architecture Components,
      Constraint Layout, Retrofit, OkHttp3, and more. On the iOS platform, I am comfortable with Swift programming, and have exposure to such technolgies as RxSwift,
      Autolayout, Firebase, Alamofire, SwiftyJSON, and more. I also have a background in Web Development, and have built a number of websites and single page applications
      using the latest in front end frameworks and backend technogies, such as React, Redux, Angular, Node, MongoDB, PostgreSQL, and more. Finally, I want to mention my experience
      and interest in machine learning technologies, such as TensorFlow, TensorFlow Lite, and TensorFlow.js. I think it will become increasingly valuable for developers to have 
      skills in machine learning, even if that is not their primary focus. 
      </p>
      <p style={styles.content}>
      I have found something I truly love in mobile development. My first experience coding was building a C++ calculator at the age of 6 (with some oversight from my Dad). Now
      I love analytical problem solving, building useful abstractions, getting things right (sometimes after getting them wrong a few times),
      and communicating intent through code. In my spare time I love to write, create and play music (both acoustic and electronic), study Japanese, and exercise (particularly
      long distance running). I think coding is complementary to these interests, and can't wait to see what's down the road further within this field.
      </p>
    </div>
  </div>
);

export default About;