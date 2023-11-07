import {FaSadTear} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Missing() {
  return (
    <div>
       <FaSadTear size={50}/>
        <p>404 page not Found</p>
        <P>Go back to <Link to='/'>Home</Link></P>
    </div>
  )
}

export default Missing
