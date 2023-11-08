import { createContext, useState,useEffect } from "react";
import { Budgets } from "../../data/Data";

export const DataContext = createContext('')


function Context( {children} ) {
const [showNav,setShowNav] = useState(false)
const [BudgetData,setBudgetData] = useState([])
const [ToggleAddBudget,setToggleAddBudget] = useState(false)


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
        setBudgetData,
        ToggleAddBudget,
        setToggleAddBudget
      }
      }>
      {children}
    </DataContext.Provider>
  )
}

export default Context
