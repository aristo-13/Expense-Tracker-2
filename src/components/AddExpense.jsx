import { useState } from "react"



function AddExpense( {setNewExpense,budgetItem}) {
  const [newExpText,setNewExpText] = useState('')
  const [newExpCost,setNewExpCost] = useState(0)
  const [acc,setAcc] = useState('')


 const AddNewExpense = (e) => {
    e.preventDefault()
    const Exp = budgetItem.Expenses
    let newId = Exp.length? Exp[Exp.length -1].id + 1:1

    const newExp = {
        text: newExpText,
        cost: Number(newExpCost),
        account: acc,
        id: newId,
    }

    console.log(newExp)
    Exp.push(newExp)
    setNewExpense(false)
 }


  return (
    <div className="absolute p-4 top-[200px] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white z-[10] w-[min(80%,500px)] border border-blue-800 shadow-lg flex flex-col gap-4">
       <h1 className="text-center font-bold">Add Expense</h1>
        <form className="flex flex-col gap-2" onSubmit={AddNewExpense}>
            <input type="text" className="border w-full p-2" placeholder="Enter Expense" value={newExpText} onChange={(e)=> setNewExpText(e.target.value)}/>
            <input type="number" className="border w-full p-2" placeholder="Enter Expense Cost" value={newExpCost} onChange={(e) => setNewExpCost(e.target.value)}/>
            <select className="w-full border p-3" onChange={(e) => setAcc(e.target.value)}>
                <option value="Credit">Credit</option>
                <option value="Paypal">Paypal</option>
                <option value="Credit Card">Credit Card</option>
            </select>

            <div className="w-full flex justify-center gap-2 p-4">
                <button className="px-10 py-2 border rounded text-white bg-red-900" onClick={() => setNewExpense(false)}>Back</button>
                <button className="px-10 py-2 border rounded text-white bg-blue-950" type="submit">Save</button>
             </div>
        </form>
    

     
     </div>
  )
}

export default AddExpense
