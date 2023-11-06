import { createContext, useState } from "react";

export const DataContext = createContext('')


function Context( {children} ) {
const [showNav,setShowNav] = useState(false)


  return (
    <DataContext.Provider value={{showNav,setShowNav}}>
      {children}
    </DataContext.Provider>
  )
}

export default Context
