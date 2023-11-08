import { useContext,useEffect, useState } from "react"
import { DataContext } from "../components/Context"
import { Budgets } from "../../data/Data"
import format from 'date-fns/format'
import { useNavigate } from "react-router-dom"

function AddBudget() {
const {ToggleAddBudget,setToggleAddBudget,BudgetData,setBudgetData} = useContext(DataContext)
const [newCategory,setNewCategory] = useState('Transport')
const [newBudgetAmt,setNewBudgetAmt] = useState((''))
const navigate = useNavigate()

const AddNewBudget = (e) => {
    e.preventDefault()
    const newId = BudgetData.length? BudgetData[BudgetData.length -1].id + 1: 1
    const newBudget = {
        id: newId,
        BudgetAmt: Number(newBudgetAmt),
        category: newCategory,
        date: format(new Date(),'MM/dd/yyyy'),
        Expenses: []
    }
   
    setBudgetData(
        [...BudgetData,newBudget]
    )
    console.log(newBudget)
    setToggleAddBudget(false)
    navigate('/analytics')
}



  return (
    <div className="absolute p-4 top-[250px] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white z-[10] w-[min(80%,500px)] border border-blue-800 shadow-lg flex flex-col gap-4">
        <h1 className="text-center font-bold">Add Budget</h1>

        <form onSubmit={AddNewBudget}>
            <input type="number" value={newBudgetAmt} onChange={(e)=> setNewBudgetAmt(e.target.value)} className="border w-full p-2" placeholder="Budget Amount"/>
            <label htmlFor="selectCat">select category</label>
            <select className="w-full border p-2" name="selectCat" value={newCategory} onChange={(e)=> setNewCategory(e.target.value)}>
                <option value="Foods/Drinks">Foods/Drinks</option>
                <option value="Transport">Transport</option>
                <option value="Vacation">Vacation</option>
                <option value="Drinks">Drinks</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Education">Education</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Travel">Travel</option>
                <option value="Shopping">Shopping</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Hobbies">Hobbies</option>
                <option value="Gifts">Gifts</option>
            </select>


          <div className="w-full flex justify-center gap-2 p-4">
            <button className="px-10 py-2 border rounded text-white bg-red-900" onClick={() => setToggleAddBudget(false)}>Back</button>
            <button className="px-10 py-2 border rounded text-white bg-blue-950" type="submit">Save</button>
          </div>
        </form>
    </div>
  )
}

export default AddBudget
