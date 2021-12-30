import React, { Component, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
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
const Blog = () => {

  const [posts, setPosts] = useState([]);
  const [displayPosts, setDisplayPosts] = useState([]);
  const [buttonText, setButtonText] = useState("Show More");

  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tylerwalker')
   .then((res) => res.json())
   .then((data) => {
      const { items } = data
      const _posts = items.filter(item => item.categories.length >= 3)
      const top3 = _posts.slice(0, 3)
      setPosts(_posts)
      setDisplayPosts(top3)
    })
  }, [])

  const toggle = () => {
    if (buttonText === "Show More") {
      setButtonText("See all")
      setDisplayPosts(posts)
    } else {
      navigate("/blog")
    }
  }

  return (
    <div className="blog">
      <BlogHeader />
      <div style={{ display: 'flex', 'flexDirection': 'row', justifyContent: 'flex-end'}}>
        <RaisedButton style={{ marginTop: -55, marginRight: 60, marginBottom: 20}} onClick={() => navigate("/blog")}>See All</RaisedButton>
      </div>
      { displayPosts.map((post, i) => (
        <BlogPost post={post} key={`post-${i}`} />
      ))
      }
      <RaisedButton style={styles.button} onClick={toggle}>{buttonText}</RaisedButton>
    </div>
  );
}

export default Blog