import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.tsx'

import ProductDetail from './Components/Pages/ProductDetailPage/ProductDetail.tsx'
import Home from './Components/Pages/HomePage/Home.tsx'
import CatagoryPage from './Components/Pages/CatagoryPage/CatagoryPage.tsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>  
          <Route path='/productdetail' element={<ProductDetail/>}/>  
          <Route path='/catagories' element={<CatagoryPage/>}/>  
    </Route>
  )
)



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
    <App />
  </StrictMode>,
)
