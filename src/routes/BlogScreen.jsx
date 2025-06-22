import React, { Component, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Chip from 'material-ui/Chip';
import BlogHeader from '../components/BlogHeader'
import BlogPostFull from '../components/BlogPostFull'
import { blue900 } from 'material-ui/styles/colors';
import TopBar from '../components/TopBar';
import Divider from 'material-ui/Divider';
import { logPageView } from '../analytics';

const styles = {
  button: {
    paddingLeft: "15px",
    paddingRight: "15px",
  }
}
const BlogScreen = () => {

  useEffect(() => {
    logPageView('blog');
  }, []);

    const [categories, setCategories] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([])
    const [posts, setPosts] = useState([])

    const navigate = useNavigate();

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tylerwalker')
   .then((res) => res.json())
   .then((data) => {
      const { items } = data

      const _categories = items.reduce((set, curr) => {
        curr.categories.forEach(category => set.add(category));
        return set;
      }, new Set())

      setCategories([..._categories].sort())
      setPosts(items)
    })
  }, [])

  const toggle = () => {
    const { goToBlogScreen } = this.props;
    const { posts, buttonText } = this.state

    var displayPosts, text
    if (buttonText === "Show More") {
      text = "See all"
      displayPosts = posts
    } else {

    }

    this.setState({ buttonText: text, displayPosts })
  }

  const _onClickChip = (x) => {
    const category = x.target.innerHTML;

    if (!selectedCategories.includes(category)) {
        selectedCategories.push(category)
    } else {
        selectedCategories.splice(selectedCategories.indexOf(category), 1)
    }

    setSelectedCategories(selectedCategories.sort().slice())
  }

  const selectedPosts = selectedCategories.length === 0 
  ? posts 
  : posts.filter(post => selectedCategories.every(category =>
    post.categories.includes(category)))


    return (
        <div>
          <div className="content">
            <TopBar onBack={() => navigate("/")}/>
            <div style={{ height: 100}} />
            <BlogHeader text="ALL BLOG POSTS" margin={20} />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                { selectedCategories.map(category => <Chip onClick={_onClickChip} style={{margin: 2}} >{category}</Chip> )}
                { categories
                    .filter(category => !selectedCategories.includes(category))
                    .map(category => <Chip onClick={_onClickChip} style={{ backgroundColor: 'white', border: '1px solid rgb(13, 71, 161)', margin: 2}}>{category}</Chip> )}
            </div>
            { selectedPosts.map(post => <BlogPostFull post={post} />)}
          </div>
        </div>
    )
}

export default BlogScreen