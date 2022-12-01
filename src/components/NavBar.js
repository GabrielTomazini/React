import {Link} from 'react-router-dom'
function NavBar(){
    return (
        <ul>
        
        <li>
          <Link to = "/">HomePage </Link>
        </li>
        <li>
          <Link to = "/empresa">empresa </Link>
        </li>
        <li>
          <Link to = "/contato">contato </Link>
        </li>
      </ul>
    )
}
export default NavBar