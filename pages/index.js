import { useState } from 'react';
import axios from 'axios';

const Home = (props) => {
  const [post,setPost] =useState([]);
  const getPosts = () => {
    axios.get('/api/posts').then(response =>{
      setPost(response.data)
    })
  }

  console.log(post)

  return (
    <div>
      <button onClick={getPosts}>
        Load posts
      </button>
    </div>
  )
}


export default Home;