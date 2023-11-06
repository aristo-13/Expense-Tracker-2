import { createBrowserRouter, createRoutesFromElements,Route ,RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'

function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
       <Route path='/' element={<Dashboard />}>
           
       </Route>
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
