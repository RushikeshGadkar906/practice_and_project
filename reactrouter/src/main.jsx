import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import './index.css'
import Layout from './Layout'

const router = createBrowserRouter([{
    path: '/',
    element: < Layout / > ,
    children: [{
            path: "",
            element: < Home / >
        },
        {
            path: "about",
            element: < About / >
        },
        {
            path: "contact",
            element: < Contact / >
        }
    ]
}])

ReactDOM.createRoot(document.getElementById('root')).render( <
    React.StrictMode >
    <
    RouterProvider router = { router }
    /> <
    /React.StrictMode>,
)