import { Link } from 'react-router-dom';
import {BsTrash,BsPen} from 'react-icons/bs'

function AnalyticEl({ budget }) {
    const handleAvatar = () => {
      let p = budget.category[0];
      return p;
    }
  
    const colors = {
      "Foods/Drinks": "#56dcaf",
      Transport: "#b8b84c",
      Vacation: "#dc5658",
      Drinks: "#4b478b",
      Others: "#4b478a",
    }
  
    return (
        <Link to={`/${budget.id}`} className='flex flex-col sm:flex-row  p-2 items-center border m-2 rounded gap-5 relative'>
        <div className='w-full flex items-center justify-between sm:flex-col sm:items-start gap-2 sm:justify-center sm:text-center'>
          <span>{budget.category}</span>
          <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center text-white" style={{ backgroundColor: colors[budget.category] }}>{handleAvatar()}</div>
          <span className='text-gray-500'>{budget.date}</span>
        </div>
        <div className='w-full sm:absolute sm:w-[70%] sm:left-[50%] sm:translate-x-[-50%]'>
          <progress max='100' value='75' style={{ width: "100%", height: '20px', borderRadius: '20px', overflow: "hidden" }}></progress>
        </div>
        <div className='w-full flex justify-between sm:flex-col sm:items-end gap-2'>
          <span>Budget: {budget.BudgetAmt.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
          <div className='flex items-center gap-3 text-[1.2rem]'>
            <button className='border p-2 rounded'><BsPen /></button>
            <button className='border p-2 rounded'><BsTrash /></button>
          </div>
        </div>
      </Link>
    )
  }
  
  export default AnalyticEl
  