import {Outlet,Link} from 'react-router-dom'
const Contact = () => {
    return (<>
    <h1>This is contact page</h1>
    <button><Link to="call">Call or Mail Us</Link></button>
    <button><Link to="letter">Drop a Letter</Link></button>
    <Outlet></Outlet>
    </>  );

}
 
export default Contact;