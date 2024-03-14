import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <>
        <Link to="/">Home</Link>
        <Link to= "/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Products">Products</Link>
        </>
     );
}
 
export default Navbar;