import React from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';
import medium from '../assets/medium.png'
import './BlogPostFull.css'
import RaisedButton from 'material-ui/RaisedButton';


const styles = {
    root: {
        
      },
      header: {
        color: 'rgb(13, 71, 161)',
        marginRight: 8
      },
  paper: {
    margin: "24px",
    cursor: "pointer"
  },
  card: {
    width: '100%',
    height: '100px',

  },
  title: {
    fontSize: '2vw',
    marginLeft: "12px",
    lineHeight: '150%',
    fontWeight: 'bold',
    letterSpacing: '1px',
  },
  img: {
    height: "75px",
    width: "75px",
    borderRadius: "37.5px",
    marginTop: "12.5px",
    marginLeft: "15px"
  },
  flex: {
    display: "flex",
    flexFlow: "row nowrap"
  }
}

const BlogPostFull = (props) => {
  const { title, thumbnail, link, content, categories, description } = props.post

  var safeThumbnail
  if (thumbnail != null && thumbnail.includes("https://medium.com")) {
    safeThumbnail = medium
  } else {
    safeThumbnail = thumbnail
  }

  const view = () => {
    window.location = link
  }

  return (
    <>
        <div style={{marginTop: 50, marginLeft: 8, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <h2 style={styles.header}>{title}</h2>
            {categories.map(category => <Chip style={{
                height: 32,

            }}>{category}</Chip>)}
        </div>
        <Divider />
        <div dangerouslySetInnerHTML={{ __html: content.slice(0, 1500) }} />
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <RaisedButton style={{padding: 5, paddingLeft: 40, paddingRight: 40}} onClick={() => window.location = link}>See full post</RaisedButton>
        </div>
            
    </>
  )
}

export default BlogPostFull
