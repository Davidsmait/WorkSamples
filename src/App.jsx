import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import {createBrowserRouter, RouterProvider} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    },
    {
        path: "/projects",
        element: <div>Hello world!</div>
    },
]);

function App() {

  return (
      <RouterProvider router={router} />
  )
}

export default App


function Home() {
    return (
        <div className="App">
            <Header />
            <Nav />
            <Experience />
            <Portfolio />
            <About />
            {/* <Contact /> */}
            <Footer />
        </div>
    )
}
