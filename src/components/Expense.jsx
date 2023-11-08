

function Expense( {expense,budgetItem}) {
 const handleAvatar = () => {
   let p = expense.text[0]

   return p
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
  // Add more category-color pairs as needed
};


  return (
    <>
   
    <div className='w-full flex justify-between p-2 m-2 mx-auto border items-center rounded'>
       <div className='flex items-center gap-2'>
          <div className='w-[40px] h-[40px] text-white rounded-full flex items-center justify-center text-[1.3rem]' style={{backgroundColor: colors[budgetItem.category]}}>{handleAvatar()}</div>
          <span>
            {expense.text}
          </span>
       </div>
       <div className='flex flex-col'>
         <span className='text-[red] font-semibold'>{expense.cost.toLocaleString('en-US', { style: 'currency',currency: 'USD',})}</span>
         <span className='text-gray-500 text-[10px]'>{expense.account}</span>
       </div>

    </div>
    </>
  )
}

export default Expense
