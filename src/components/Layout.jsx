import SideNav from "./SideNav"
import Header from "./Header"
import { Outlet } from "react-router"
import UseScreenWidth from "../Hooks/UseScreenWidth"
import { useContext,useEffect } from "react"
import { DataContext } from "./Context"

function Layout() {
  const {showNav,setShowNav} = useContext(DataContext)
  const width = UseScreenWidth()

  
  useEffect(() => {
    !(width < 700) ? setShowNav(true) : setShowNav(false)
  },[width])

  return (
    <section className='flex'>
       {showNav && <SideNav />} 
        <main className='flex-grow'>
            <Header />
             <Outlet />
        </main>
    </section>
  )
}

export default Layout
