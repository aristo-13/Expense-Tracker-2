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
       <h1 className="text-[1.2rem] font-medium  text-blue-950 p-2">ALL BUDGETS</h1>
       <div className="flex flex-col-reverse">
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
