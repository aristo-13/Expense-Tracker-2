import { useParams } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "./Context"
import ExpenseEl from "./Expense"

function BudgetDetails() {
 const {id} = useParams()
 const {BudgetData,setBudgetData} = useContext(DataContext)
 


 const Expense = () => {
    let exp = 0

    BudgetData[id].Expenses.forEach((expense) => {
        exp += expense.cost
    })

    return exp.toLocaleString('en-US', { style: 'currency',currency: 'USD',})
 }




  return (
    <div className='flex flex-col w-full justify-center items-center p-3 '>
        <div className="flex flex-col justify-center items-center">
            <span className="text-[1rem] sm:text-[1.4rem] font-bold text-blue-950">{BudgetData[id].category}</span>
            <span className="text-gray-500">{BudgetData[id].date}</span>
        </div>
        <div className='w-full flex justify-center gap-2 sm:justify-between items-center flex-wrap'>
            <span className="font-medium">Transactions: {BudgetData[id].Expenses.length}</span>
            <span className="text-[green] font-medium">Budget: {BudgetData[id].BudgetAmt.toLocaleString('en-US', { style: 'currency',currency: 'USD',})}</span>
            <span className="text-[red] font-medium">Expenses: {Expense()}</span>
        </div>
        <div className='w-full'>
            {
                BudgetData[id].Expenses.map((exp) => (
                  <ExpenseEl expense={exp} key={exp.id} />
                ))
            }
        </div>
    </div>
  )
}

export default BudgetDetails
