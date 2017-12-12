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
        My first experience coding was building a C++ calculator at the age of 6 (with some oversight from my Dad). Now
        I am loving the potential for analytical problem solving, creativity and expertise that the field of web development
        has to offer. In my spare time I love to write, create and play music (both acoustic and electronic), and exercise (particularly
        long distance running, my other point of insanity apart from coding).
      </p>
    </div>
  </div>
);

export default About;