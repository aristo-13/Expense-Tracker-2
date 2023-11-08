import { createBrowserRouter, createRoutesFromElements,Route ,RouterProvider} from 'react-router-dom'
import Layout from './Pages/Layout'
import Dashboard from './Pages/Dashboard'
import Analytics from './Pages/Analytics'
import BudgetDetails from './Pages/BudgetDetails'
import MissingErr from './Pages/MissingErr'
import EditBudget from './Pages/EditBudget'

function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        <Route path='/' element={<Dashboard />} />
        <Route path='/budget/:id' element={<BudgetDetails />} />
        <Route path='/analytics' element={<Analytics />}/>
        <Route path='/budget/:id/edit' element={<EditBudget />} />

        <Route path='*' element={<MissingErr />}/>
    </Route>
  )
)

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
