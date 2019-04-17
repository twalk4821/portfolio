import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import BlogHeader from './BlogHeader'
import BlogPost from './BlogPost'
import { blue900 } from 'material-ui/styles/colors';

const styles = {
  button: {
    paddingLeft: "15px",
    paddingRight: "15px",
  }
}
class Blog extends Component {
  state = {
    posts: [],
    displayPosts: [],
    buttonText: "Show More"
  }

  componentDidMount() {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tylerwalker')
   .then((res) => res.json())
   .then((data) => {
      const { items } = data
      const posts = items.filter(item => item.categories.length === 5)
      const top3 = posts.slice(0, 3)
      this.setState({ posts, displayPosts: top3 })
    })
  }

  toggle = () => {
    const { posts, buttonText } = this.state

    var displayPosts, text
    if (buttonText === "Show More") {
      text = "Show Less"
      displayPosts = posts
    } else {
      text = "Show More"
      displayPosts = posts.slice(0, 3)
    }

    this.setState({ buttonText: text, displayPosts })
  }

  render() {
    return (
      <div className="blog">
        <BlogHeader />
        { this.state.displayPosts.map((post, i) => (
          <BlogPost post={post} key={`post-${i}`} />
        ))
        }
        <RaisedButton style={styles.button} onClick={this.toggle}>{this.state.buttonText}</RaisedButton>
      </div>
    )
  }
}

export default Blog