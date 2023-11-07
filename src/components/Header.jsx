import { BiChevronDown, BiMenu, BiNotification, BiUser } from "react-icons/bi"
import UseScreenWidth from "../Hooks/UseScreenWidth"
import { useContext, useState } from "react"
import { DataContext } from "./Context"


function Header() {
  const {showNav,setShowNav,BudgetData,setBudgetData} = useContext(DataContext)
  const [Search,setSearch] = useState([])
  const [showTree,setShowTree] = useState(false)
  const [filtered,setFiltered] = useState([])
  const width = UseScreenWidth()

// Inside the `handleSearch` function
const handleSearch = () => {
  setShowTree(true);

    setFiltered(
      BudgetData.filter((Budget) =>
        (Budget.category).toLowerCase().includes(Search.toLowerCase())))
   
}


  
  
  return (
    <div className='flex items-center justify-between p-3 border shadow-lg gap-5 mt-2 sticky top-0 bg-white rounded'>
        {width < 700 && <BiMenu onClick={() => setShowNav(true)} size={30} className='cursor-pointer'/>}
       <form className='flex-grow relative' onSubmit={(e) => e.preventDefault()}>
         <input 
         type="text" 
         placeholder='search...' 
         className='text-black caret-black border p-1 rounded w-full'  
         autoFocus
         role="searchbox"
         onChange={(e) => {
          handleSearch()
          setSearch(e.target.value)
         }}
         />
         <div className='absolute w-full'>
            {showTree && 
              <div>
                {filtered.map((filter) => (
                  <div key={filter.id} className="border p-2 m-1">
                    {filter.category}
                  </div>
                ))}
              </div>
            }
        </div>

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
