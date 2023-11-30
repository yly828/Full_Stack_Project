
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
function App() {
  const [listOfPosts, setlistOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      // console.log(response.data);
      setlistOfPosts(response.data);

    });
  }, []);

  return (
    <div className="App">
      {listOfPosts.map((value, key) => {
      return (
      <div className='post'> 
      <div className='title'>{value.title}</div>
      <div className='body'>{value.postText}</div>
      <div className='footer'>{value.username}</div>
      
      </div>);

    })}</div>
  );
}

export default App;