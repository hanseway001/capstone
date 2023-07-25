// client/src/App.jsx
import React from 'react'
import { Routes, Route} from 'react-router-dom'

import {Home} from './pages/Home'
import {Login} from './pages/Login'
import {Courses} from './pages/Courses'
import {Registration} from './pages/Registration'
import {Student} from './pages/Student'
import {About} from './pages/About'
import {Error} from './pages/Error'
import {Admin} from './pages/Admin'
import {Addcourse} from './pages/AddCourse'

// import {Home, Login, Courses, Student, Registration, About, Error, Admin, Addcourse} from './pages/index'


export default function  App() {
  return (
    
      <Routes>
        <Route path= '/' element={<Home />} />
        <Route path= '/login'  element= {<Login />} />
        <Route path= '/courses'  element= {<Courses />} />
        <Route path= '/student'  element= {<Student />} />
        <Route path= '/registration'  element= {<Registration />} />
        <Route path= '/about'  element= {<About />} />
        <Route path= '*' element= {<Error />} />
        <Route path= '/admin' element= {<Admin />}  />
          <Route path= '/addCourse' element= {<Addcourse />} />
        {/* </Route> */}
      </Routes>
    
  )
}

