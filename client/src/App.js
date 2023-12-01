
import './App.css';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';

import {BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
         <div className="navbar">
        <div><Link to="/">Home Page</Link></div>
        <div><Link to="/createpost">Create a Post</Link></div>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/createpost" element={<CreatePost/>} />
          <Route path="/post/:id" element={<Post/>} />

        </Routes>
        


      </Router>
      

  </div>
  );
}

export default App;
