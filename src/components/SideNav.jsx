import {BiHome,BiDollar, BiAnalyse, BiCog, BiCheckCircle, BiX} from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import useScreenWidth from '../Hooks/UseScreenWidth'
import { useContext,useEffect } from "react"
import { DataContext } from "./Context"

function SideNav() {
 const width = useScreenWidth()
 const {showNav,setShowNav} = useContext(DataContext)

  return (
    <aside className='w-[250px] h-screen relative text-white shadow-lg'>
     <div className='w-[250px] h-full fixed bg-blue-950 flex flex-col gap-1 z-[1]'>
         <div className='w-full p-2 flex justify-between items-center'>
           <BiDollar  className='border text-[1.5rem] rounded-full' size={30}/>
           {width < 700 && <BiX size={30} onClick={() => setShowNav(!showNav)}/>}
        </div>
        <nav className='flex flex-col h-full justify-between text-gray-300'>
            <div>
                <NavLink className='flex items-center gap-2 p-2 hover:bg-white/10 hover:text-white'><span><BiHome className='text-[1.32rem]'/></span> Dashboard</NavLink>
                <NavLink className='flex items-center gap-2 p-2 hover:bg-white/10 hover:text-white'><span><BiAnalyse className='text-[1.32rem]'/></span> Analytics</NavLink>
                <NavLink className='flex items-center gap-2 p-2 hover:bg-white/10 hover:text-white'><span><BiCheckCircle className='text-[1.32rem]'/></span> Plan Budget</NavLink>
            </div>
            <div>
               <NavLink className='flex items-center gap-2 p-2 hover:bg-white/10 hover:text-white mb-2'><span><BiCog className='text-[1.32rem]'/></span> Settings</NavLink>
            </div>
        </nav>
     </div>
    </aside>
  )
}

export default SideNav
