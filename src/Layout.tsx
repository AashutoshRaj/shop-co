
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/NewsLetter/Footer/Footer"

import { Outlet } from "react-router-dom"
const Layout = () => {
  return (
    <>
      <Header/>
        <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
