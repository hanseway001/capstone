// client/src/App.jsx
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home, Login, Courses, Student, Registration, About, Error, Admin, Addcourse} from './pages'

// import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

// function App() {
//   const [count, setCount] = useState(0);
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("/api")
//       .then((res) => res.json())
//       .then((data) => setData(data.message));
//   }, []);


//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//           <h1>{!data ? "Loading..." : data}</h1>
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App