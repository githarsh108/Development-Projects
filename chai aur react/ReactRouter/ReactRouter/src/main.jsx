import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'

//creating router 
const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children: [
      {
        path: "Home/Home",
        element: <Home />
      },
      {
        path:"About/About",
        element:<About />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router ={router} />
  </React.StrictMode>,
)