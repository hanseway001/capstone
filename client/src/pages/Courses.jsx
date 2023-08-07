import { Link } from "react-router-dom";
import HomePageNavbar from "../components/HomePageNavBar";
// import Course from "server/models/courseModel.js"

// use axios or fetch to post to server
// use axios.get or axious.post

// on page load do (function) called getCourseInfo (react onPageLoad (useEffect))
// that function does the axios or fetch post that goes to courseModel.js
// runs the findcourses function and returns the 'rows' (rename it)
// then take that and save it to state and use that state inside html and populate
import React, { useEffect, useState } from 'react';
import axios from 'axios';


// export const styles = {
//   link: {
//     color: "teal",
//     cursor: "pointer"
//   }
// };

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Function to call the API on server load
    const callServerFunction = async () => {
      try {
        // const response = await axios.get('/api/callFunction');
        const response = await axios.get('https://localhost:3001/protected/Courses', 
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
      });
        // goes to routes/authRoutes.js then goes to courseModel 
        setMessage(response.data.message);
      } catch (error) {
        console.error('Error calling server function:', error);
      }
    };

    callServerFunction();
  }, []);

  return (
    <div>
      <h1>Hello from React adsfafsaf</h1>
      <p>Message from the floating dirt orb: {message}</p>
    </div>
  );
};
// export default App;

  const app = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
       client.get('?_limit=10').then((response) => {
          setPosts(response.data);
       });
    }, []);
    // return (
      // ...
      // );  
    };
  // export default app;


export function Courses() {
  return (
    <div className="App">
      <HomePageNavbar />

      <img src="images/logo.png"  alt="" />
      <h1>LOGIN</h1>
      <h4>Pages:</h4>

      <div className="courseMain">
        <h2>student login</h2>
      <App   />
      <h2>All Posts 📫</h2>
      <h2>All</h2>
      
    {/* {posts.map((post) => {
       return (
          <div className="post-card" key={post.id}>
             <h2 className="post-title">{post.title}</h2>
             <p className="post-body">{post.body}</p>
             <div className="button">
                <div className="delete-btn">Delete</div>
             </div>
          </div>
       );
    })} */}
        <input id="loginUsername" type="text" placeholder="username"/>
        <input id="loginPassword" type="text" placeholder="password"/>
        <input type="submit"/>
      </div>
      <div className="courseMain">
        <h2>admin login</h2>
        <input id="loginUsername" type="text" placeholder="username"/>
        <input id="loginPassword" type="text" placeholder="password"/>
        <input type="submit"/>
      </div>
    </div>
  );
}