import { Link } from "react-router-dom"
import { useContext,useState, useEffect } from "react"
import { DataContext } from "../components/Context"


function Dashboard() {
const {BudgetData,setBudgetData} = useContext(DataContext)
const [Recents,setRecents] = useState([])


const TotalBudget = () => {
   let b = 0

   BudgetData.forEach((budget) => {
      b += budget.BudgetAmt
   })

   return b
}


const TotalExpenses = () => {
   let e = 0

   BudgetData.forEach((budget) =>{
      budget.Expenses.forEach((exp) => {
         e += exp.cost
      })
   })

   return e
}

const handleRecents = () => {
   if(BudgetData.length > 5){
    const recentRecords = BudgetData.slice(BudgetData.length - 6);
    setRecents(recentRecords)
   }
 };
  
useEffect(() => {
   handleRecents()
},[BudgetData])


  return (
    <div className='w-full'>
       <div className="w-full my-2 mx-auto grid sm:grid-cols-3 gap-1">
           <div className="flex flex-col h-[100px] border p-2 justify-between text-white bg-blue-950 rounded">
              <span className='text-[1.7rem] sm:text-[2.5rem] font-medium'>{TotalBudget().toLocaleString('en-US', { style: 'currency',currency: 'USD',})}</span>
              <span>Total Budget</span>
           </div>
           <div className="flex flex-col h-[100px] border p-2 justify-between text-white bg-[#8f2738e2] rounded">
              <span className='text-[1.7rem] sm:text-[2.5rem] font-medium'>{TotalExpenses().toLocaleString('en-US', { style: 'currency',currency: 'USD',})}</span>
              <span>Total Expenses</span>
           </div>
           <div className="flex flex-col h-[100px] border p-2 justify-between text-white bg-[#7d858f] rounded ">
              <span className='text-[1.7rem] sm:text-[2.5rem] font-medium'>{BudgetData.length}</span>
              <span>Number of Budgets</span>
           </div>
       </div>
       <div className="w-full p-2 bg-[#fffdfd] border rounded shadow-md mt-5">
          <div className='w-full flex justify-between p-2'>
             <p className="text-[1.2rem] font-medium">Recent Records</p>
             <Link to='analytics' className="text-[1.2rem] text-blue-900 underline px-2 rounded">View All</Link>
          </div>
          <div className='flex flex-col-reverse'>
             {
                Recents.map((Budget) => (
                    <Link to={`/budget/${Budget.id}`} key={Budget.id} className='flex justify-between p-2 m-2 border-b hover:bg-black/20 items-center'>
                        <span className="font-bold text-blue-950">{Budget.category}</span>
                        <span>{Budget.date}</span>
                        <span className='text-[green] text-lg font-semibold'>{Budget.BudgetAmt.toLocaleString('en-US', { style: 'currency',currency: 'USD',})}</span>
                    </Link>
                ))
             }
          </div>
       </div>
    </div>
  )
}

export default Dashboard
