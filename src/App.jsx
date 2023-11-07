import { createBrowserRouter, createRoutesFromElements,Route ,RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import Analytics from './components/Analytics'

function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
       <Route path='/' element={<Dashboard />}>
           
       </Route>
       <Route path='analytics' element={<Analytics />}/>
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
