import React from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import medium from '../assets/medium.png'

const styles = {
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

const BlogPost = (props) => {
  const { title, thumbnail, link } = props.post

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
    <Paper 
      className="blog-post"
      style={styles.paper}
      zDepth={3}
      onClick={view}
    >
      <Card style={styles.card}>
      <div style={styles.flex}> 
          <img 
            src={safeThumbnail} 
            alt={title} 
            style={styles.img}
            />
        <CardTitle title={title} titleStyle={styles.title} expandable={false} />
      </div>
      </Card>
    </Paper>
  )
}

export default BlogPost
