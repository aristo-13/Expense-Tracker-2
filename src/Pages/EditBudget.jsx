import { useParams } from "react-router-dom"
import { useContext,useState, useEffect } from "react"
import { DataContext } from "../components/Context"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function EditBudget() {
const {id} = useParams()
const {BudgetData,setBudgetData} = useContext(DataContext)
const [editedCategory,setEditedCategory] = useState('Transport')
const [editedBudgetAmt,setEditedBudgetAmt] = useState('')
const navigate = useNavigate()

const filteredBudget = BudgetData.find((BudgetData) => (BudgetData.id).toString() === id)
    
 useEffect(() => {
        if(filteredBudget) {
            setEditedBudgetAmt(filteredBudget.BudgetAmt)
            setEditedCategory(filteredBudget.category)
        }
 },[filteredBudget])
   


 const handleEdit = (e) => {
    e.preventDefault()
    
    
    setBudgetData(
         BudgetData.map((budget) => budget.id === filteredBudget.id?  {
           id: id,
           BudgetAmt: Number(editedBudgetAmt),
           category: editedCategory,
           date: filteredBudget.date,
           Expenses: filteredBudget.Expenses
     }: budget)
    )


    navigate('/analytics')
 }



  return (
    <div className="p-2 flex flex-col gap-5">
        <h1 className="text-[1.2rem] font-bold  text-blue-950 p-2 border bg-black/10">Edit Your Budget</h1>


        <form className="flex flex-col gap-5" onSubmit={handleEdit}>
            <input type="number" className="border w-full p-4" value={editedBudgetAmt} onChange={(e)=> setEditedBudgetAmt(e.target.value)}/>
            <label htmlFor="selectCat">select category</label>
            <select className="w-full border p-4 rounded" name="selectCat" value={editedCategory} onChange={(e) => setEditedCategory(e.target.value)}>
                <option className="w-[100px] bg-blue-950 text-white" value="Foods/Drinks">Foods/Drinks</option>
                <option className="w-[100px] bg-blue-950 text-white" value="Transport">Transport</option>
                <option className="w-[100px] bg-blue-950 text-white" value="Vacation">Vacation</option>
                <option className="w-[100px] bg-blue-950 text-white" value="Drinks">Drinks</option>
                <option className="w-[100px] bg-blue-950 text-white" value="Maintenance">Maintenance</option>
                <option className="w-[100px] bg-blue-950 text-white" value="Education">Education</option>
                <option className="w-[100px] bg-blue-950 text-white" value="Entertainment">Entertainment</option>
                <option className="w-[100px] bg-blue-950 text-white" value="Travel">Travel</option>
                <option className="w-[100px] bg-blue-950 text-white" value="Shopping">Shopping</option>
                <option className="w-[100px] bg-blue-950 text-white" value="Healthcare">Healthcare</option>
                <option className="w-[100px] bg-blue-950 text-white" value="Hobbies">Hobbies</option>
                <option className="w-[100px] bg-blue-950 text-white" value="Gifts">Gifts</option>
            </select>


          <div className="w-full flex justify-center gap-2 p-4">
            <Link to='/analytics' className="px-10 py-2 border rounded text-white bg-red-900" >Back</Link>
            <button className="px-10 py-2 border rounded text-white bg-blue-950" type="submit">Save</button>
          </div>
        </form>
    </div>
  )
}

export default EditBudget
