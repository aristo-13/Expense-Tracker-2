import { Link } from "react-router-dom"


function Dashboard() {
  return (
    <div className='w-full'>
       <div className="w-[min(100%,700px)] my-2 mx-auto grid sm:grid-cols-2 gap-1">
           <div className="flex flex-col h-[100px] border p-2 justify-between text-white bg-blue-950">
              <span className='text-[1.7rem] sm:text-[2.5rem] font-medium'>$0.00</span>
              <span>Total Budget</span>
           </div>
           <div className="flex flex-col h-[100px] border p-2 justify-between text-white bg-[#8f2727]">
              <span className='text-[1.7rem] sm:text-[2.5rem] font-medium'>$0.00</span>
              <span>Total Expenses</span>
           </div>
       </div>
       <div className="w-full p-2 bg-[#fffdfd] border rounded shadow-md mt-5">
          <div className='w-full flex justify-between'>
             <p>Recent Records</p>
             <Link>View All</Link>
          </div>
          <div>
             <p className='grid grid-cols-3 border-b p-3'><span>Others</span> <span>01/03/1987</span><span>$2000</span></p>
             <p className='grid grid-cols-3 border-b p-3'><span>Others</span> <span>01/03/1987</span><span>$2000</span></p>
             <p className='grid grid-cols-3 border-b p-3'><span>Others</span> <span>01/03/1987</span><span>$2000</span></p>
             <p className='grid grid-cols-3 border-b p-3'><span>Others</span> <span>01/03/1987</span><span>$2000</span></p>
          </div>
       </div>
    </div>
  )
}

export default Dashboard
