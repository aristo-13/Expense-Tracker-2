import { BiChevronDown, BiMenu, BiNotification, BiUser } from "react-icons/bi"
import UseScreenWidth from "../Hooks/UseScreenWidth"
import { useContext } from "react"
import { DataContext } from "./Context"


function Header() {
  const {showNav,setShowNav} = useContext(DataContext)
  const width = UseScreenWidth()


  
  
  return (
    <div className='flex items-center justify-between p-2 border shadow-sm gap-5 mt-2 sticky top-0 bg-white'>
        {width < 700 && <BiMenu onClick={() => setShowNav(true)} size={30} className='cursor-pointer'/>}
       <form className='flex-grow'>
         <input type="text" placeholder='search...' className='text-black caret-black border p-1 rounded w-full'  autoFocus/>
       </form>
       <div className='flex items-center gap-2'>
         <BiNotification />
          <span className='flex items-center gap-1 border-l p-1'>
             <BiUser />
             <span>Aristo</span>
             <BiChevronDown />
          </span>
       </div>
    </div>
  )
}

export default Header
