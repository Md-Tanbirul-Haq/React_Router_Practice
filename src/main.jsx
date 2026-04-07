import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Component/home/home.jsx';
import Products from './Component/products/products.jsx';
import Project from './Component/project/project.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Project,
    children:[
      { index: true,
        loader:async()=>{
      let data= await fetch('https://fakestoreapi.com/products')
      data = data.json()
      return data
    },
        
        Component: Products }
    ]
  },
  {
    path:"home",
    Component:Home
  },
  {
    path:"products",
    loader:async()=>{
      let data= await fetch('https://fakestoreapi.com/products')
      data = data.json()
      return data
    },
    Component:Products
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
   
  </StrictMode>,
)
