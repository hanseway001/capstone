// client/src/App.jsx
import React, { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import ProtectedRoute  from './components/ProtectedRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Courses from './pages/Courses'
import Registration from './pages/registration'
import Student from './pages/Student'
import About from './pages/About'
import Error from './pages/Error'
import Admin from './pages/Admin'
import Addcourse from './pages/AddCourse'

// const [token, setToken] = useState(null)
// import {Home, Login, Courses, Student, Registration, About, Error, Admin, Addcourse} from './pages/index'

export default function  App() {
  // setToken(token)
  const token = localStorage.getItem('jwtToken')
  console.log('this is from local storage',token)
  return (
      <Routes>
        <Route path= '/' element={<Home />} />
        <Route path= '/login'  element= {<Login />} />
        <Route path= '/courses'  element= {<Courses />} />
       
        <Route path= '/student'  element= { 
          <ProtectedRoute token={token}>
            <Student />
          </ProtectedRoute>  
          }
        />
        <Route path= '/admin'  element= { 
          <ProtectedRoute token={token}>
            <Admin />
          </ProtectedRoute> 
        }
        />

        <Route path= '/registration'  element= {<Registration />} />
        <Route path= '/about'  element= {<About />} />
        <Route path= '*' element= {<Error />} />
        <Route path= '/admin' element= {<Admin />}  />
          <Route path= '/addCourse' element= {<Addcourse />} />
        {/* </Route> */}
      </Routes>
    
  )
}

