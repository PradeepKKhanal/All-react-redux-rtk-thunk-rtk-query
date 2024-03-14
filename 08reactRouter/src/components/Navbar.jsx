import {Link,NavLink } from 'react-router-dom'
const Navbar = () => {
    return ( <ul>
        <NavLink to="/"  style={({isActive})=>({color:isActive?'red':'black'})}>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <Link to="/contact">Contact</Link>
        


        {/* <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li> */}
    </ul> );
}
 
export default Navbar;