import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { DataContext } from "../components/Context";
import { FaMinus } from "react-icons/fa";
import ExpenseEl from "../components/Expense";
import AddExpense from "../components/AddExpense";

function BudgetDetails() {
  const { id } = useParams();
  const { BudgetData } = useContext(DataContext);
  const [newExpense,setNewExpense] = useState(false)

  if (!BudgetData || !BudgetData[id]) {
    return <div>Loading...</div>;
  }

  const budgetItem = BudgetData[id];

  const calculateTotalExpenses = () => {
    let totalExpenses = 0;

    budgetItem.Expenses.forEach((expense) => {
      totalExpenses += expense.cost;
    });

    return totalExpenses.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  return (
    <div className='flex flex-col w-full justify-center items-center p-3 relative'>
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
      {!(budgetItem.Expenses.length) > 0 && <p className="text-red-500 font-medium text-[1.4rem] text-center mt-10">No Transactions to show!</p>}
        {budgetItem.Expenses.map((expense) => (
          <ExpenseEl expense={expense} key={expense.id} budgetItem={budgetItem}/>
        ))}
      </div>
      {newExpense && <div className='w-full h-screen bg-black/80 fixed z-[10] right-0 bottom-0' onClick={() => setNewExpense(false)}></div>}
      {newExpense && <AddExpense setNewExpense={setNewExpense} budgetItem={budgetItem}/>}
      <FaMinus className="w-[50px] h-[40px] fixed bottom-10 right-[90px] bg-red-600 text-white cursor-pointer border rounded-full p-3 active:scale-[0.9]" onClick={() => setNewExpense(true)}/>
    </div>
  )
}

export default BudgetDetails;
