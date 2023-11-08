import {FaSadTear} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Missing() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
       <FaSadTear size={50}/>
        <p className='font-bold'>404 page not Found</p>
        <p className='font-bold'>Go back to <Link to='/'>Home</Link></p>
    </div>
  )
}

export default Missing
