import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './ReactRouter/Home/Home.jsx'
import About from './ReactRouter/About/About.jsx'
import Contact from './ReactRouter/Contact/Contact.jsx'
import Github, { githubInfoLoader } from './ReactRouter/Github/Github.jsx'
import User from './ReactRouter/User/User.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children:
//       [{
//         path: '',
//         element: <Home />

//       },
//       {
//         path: 'about',
//         element: <About />


//       },
//       {
//         path: 'contact',
//         element: <Contact />


//       },
//       {
//         // loader:{githubInfoLoader},
//         path: 'github',
//         element: <Github/>


//       }
//       ,
//       {

//         path: 'user/:id',
//         element: <User/>

//       }
//       ]
//   }

// ]


// )


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:id' element={<User />} />
      <Route
        loader={githubInfoLoader}
        path='github'
        element={<Github />}
      />
    </Route>

  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}

    <RouterProvider router={router} />





  </React.StrictMode>,
)
