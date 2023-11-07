import { Link } from "react-router-dom"
import { useContext,useState, useEffect } from "react"
import { DataContext } from "./Context"
import AnalyticEl from "./AnalyticEl"

function Analytics() {
  const {BudgetData,setBudgetData} = useContext(DataContext)


  return (
    <div className="p-2">
       <h1 className="text-[1.2rem] font-medium  text-blue-950 p-2">ALL BUDGETS</h1>
       <div>
          {
            BudgetData.map((budget) => (
              <AnalyticEl budget={budget} key={budget.id}/>
            ))
          }
       </div>
    </div>
  )
}

export default Analytics
