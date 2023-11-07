import { createContext, useState,useEffect } from "react";
import { Budgets } from "./Data";

export const DataContext = createContext('')


function Context( {children} ) {
const [showNav,setShowNav] = useState(false)
const [BudgetData,setBudgetData] = useState([])


useEffect(() => {
  setBudgetData(Budgets)
},[])
  return (
    <DataContext.Provider 
    value={
      {
        showNav,
        setShowNav,
        BudgetData,
        setBudgetData
      }
      }>
      {children}
    </DataContext.Provider>
  )
}

export default Context
