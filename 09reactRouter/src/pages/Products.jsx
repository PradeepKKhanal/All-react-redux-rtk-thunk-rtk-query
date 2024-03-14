import {Link, Outlet} from 'react-router-dom'
const Products = () => {
    return ( <>
    <h1>This is the product page</h1>
    <p>Here we are providing the information about the product we are selling with the quality.</p>

    <h1><Link to="p1">Product1</Link></h1>
    <h1><Link to="p2">Product2</Link></h1>
    <h1><Link to="p3">Product3</Link></h1>

    <Outlet></Outlet>
    
    </> );
}
 
export default Products;