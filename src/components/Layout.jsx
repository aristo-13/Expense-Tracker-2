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
       {showNav && (width < 700) &&  <div className='w-full h-screen bg-black/80 absolute z-[1] right-0' onClick={() => setShowNav(false)}></div>}
        <main className='flex-grow p-3' style={{marginLeft: !(width < 700) && '250px'}}>
            <Header />
             <Outlet />
        </main>
    </section>
  )
}

export default Layout
