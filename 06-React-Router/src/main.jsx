import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Header from './components/header/Header.jsx'
import Layout from './layout.jsx'
import Homepage from './components/homepage/Homepage.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Connect from './components/connect/Connect.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}> 
      <Route path='' element={<Homepage />} />
      <Route path='about/' element={<About />} />
      <Route path='contact/' element={<Contact />} />
      <Route path='connect/' element={<Connect />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
