import { Link } from 'react-router-dom';
import {BsTrash,BsPen} from 'react-icons/bs'

function AnalyticEl({ budget,handleDelete }) {
    const handleAvatar = () => {
      let p = budget.category[0];
      return p;
    }
  
    const colors = {
        'Foods/Drinks': '#56dcaf',
        'Transport': '#b8b84c',
        'Vacation': '#dc5658',
        'Drinks': '#4b478b',
        'Maintenance': '#ff5733',
        'Education': '#3399ff',
        'Entertainment': '#ff33cc',
        'Travel': '#33cc33',
        'Shopping': '#9966cc',
        'Healthcare': '#ffcc00',
        'Hobbies': '#cc99ff',
        'Gifts': '#ff6666'
      };


    const handleProgress = () => {
        let a = budget.BudgetAmt
       
            let totalExpenses = 0;
            budget.Expenses.forEach((expense) => {
              totalExpenses += expense.cost;
            });

       return (totalExpenses/a) *100
    }
  
    return (
       <div className='flex flex-col sm:flex-row  p-2 items-center border m-2 rounded gap-5 relative hover:bg-black/20'>
        <div className='w-full flex items-center justify-between sm:flex-col sm:items-start gap-2 sm:justify-center sm:text-center'>
          <span>{budget.category}</span>
          <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center text-white" style={{ backgroundColor: colors[budget.category] }}>{handleAvatar()}</div>
          <span className='text-gray-500'>{budget.date}</span>
        </div>
        <Link to={`/budget/${budget.id}`} className='w-full sm:absolute sm:w-[70%] sm:left-[50%] sm:translate-x-[-50%]'>
          <progress max='100' value={handleProgress()} style={{ width: "100%", height: '10px', borderRadius: '20px', overflow: "hidden" }}></progress>
        </Link>
        <div className='w-full flex justify-between sm:flex-col sm:items-end gap-2'>
          <span>Budget: {budget.BudgetAmt.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
          <div className='flex items-center gap-3 text-[1.2rem]'>
            <button className='border p-2 rounded bg-green-600 text-white'><BsPen /></button>
            <button className='border p-2 rounded bg-red-600 text-white' onClick={() => handleDelete(budget)}><BsTrash /></button>
          </div>
        </div>
      </div>
    )
  }
  
  export default AnalyticEl
  