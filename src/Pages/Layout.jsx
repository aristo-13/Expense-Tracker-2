import SideNav from "../components/SideNav"
import Header from "../components/Header"
import { Outlet } from "react-router"
import UseScreenWidth from "../Hooks/UseScreenWidth"
import { useContext,useEffect } from "react"
import { DataContext } from "../components/Context"
import AddBudget from "../components/AddBudget"
import {FaPlus} from 'react-icons/fa'

function Layout() {
  const {showNav,setShowNav,ToggleAddBudget,setToggleAddBudget} = useContext(DataContext)
  const width = UseScreenWidth()

  
  useEffect(() => {
    !(width < 700) ? setShowNav(true) : setShowNav(false)
  },[width])

  return (
    <section className='flex relative'>
       {showNav && <SideNav />} 
       {showNav && (width < 700) &&  <div className='w-full h-screen bg-black/80 fixed z-[2] right-0' onClick={() => setShowNav(false)}></div>}
        <main className='flex-grow p-3' style={{marginLeft: !(width < 700) && '250px'}}>
            <Header />
             <Outlet />
        </main>
       {ToggleAddBudget && <div className='w-full h-screen bg-black/80 fixed z-[10] right-0' onClick={() => setToggleAddBudget(false)}></div>}
       {ToggleAddBudget && <AddBudget />}
       <FaPlus className="w-[50px] h-[40px] fixed bottom-10 right-10 bg-blue-950 text-white cursor-pointer border rounded-full p-3 active:scale-[0.9]" onClick={() => setToggleAddBudget(true)}/>
    </section>
  )
}

export default Layout
