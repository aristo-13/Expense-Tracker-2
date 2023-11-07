import { useParams } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "./Context"
import ExpenseEl from "./Expense"

function BudgetDetails() {
  const { id } = useParams()
  const { BudgetData } = useContext(DataContext)

  
  /* if (!BudgetData || !BudgetData[id]) {
    return <div>Loading...</div>; 
  }
 */
  const budgetItem = BudgetData[id];

  const calculateTotalExpenses = () => {
    let totalExpenses = 0;

    budgetItem.Expenses.forEach((expense) => {
      totalExpenses += expense.cost;
    });

    return totalExpenses.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  return (
    <div className='flex flex-col w-full justify-center items-center p-3'>
      <div className="flex flex-col justify-center items-center">
        <span className="text-lg sm:text-2xl font-bold text-blue-950">{budgetItem.category}</span>
        <span className="text-gray-500">{budgetItem.date}</span>
      </div>
      <div className='w-full flex justify-center gap-2 sm:justify-between items-center flex-wrap'>
        <span className="font-medium">Transactions: {budgetItem.Expenses.length}</span>
        <span className="text-green-500 font-medium">Budget: {budgetItem.BudgetAmt.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
        <span className="text-red-500 font-medium">Expenses: {calculateTotalExpenses()}</span>
      </div>
      <div className='w-full'>
        {budgetItem.Expenses.map((expense) => (
          <ExpenseEl expense={expense} key={expense.id} />
        ))}
      </div>
    </div>
  )
}

export default BudgetDetails
