import { Link } from "react-router-dom"
import { useContext,useState, useEffect } from "react"
import { DataContext } from "../components/Context"
import AnalyticEl from "../components/AnalyticEl"

function Analytics() {
  const {BudgetData,setBudgetData} = useContext(DataContext)


  const handleDelete = (bud) =>{
    const NewItems = BudgetData.filter((budget) => budget !== bud )
    setBudgetData(NewItems)
  }

  return (
    <div className="p-2">
       <h1 className="text-[1.2rem] font-bold  text-blue-950 p-2 border bg-black/10">ALL BUDGETS</h1>
       <div className="flex flex-col-reverse">
         {!BudgetData.length > 0 && <p className="text-red-600 text-center text-lg font-medium">No Budgets To show!</p> }
          {
            BudgetData.map((budget) => (
              <AnalyticEl budget={budget} key={budget.id} handleDelete={handleDelete}/>
            ))
          }
       </div>
    </div>
  )
}

export default Analytics
