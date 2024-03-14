import {Outlet} from 'react-router-dom'

const BooksLayout = () => {
    return ( <>
       <h1>this is the header of the book page</h1>
        <Outlet context="Pradeep"></Outlet>

       <h1>this is the footer of the book page</h1>
    </> );
}
 
export default BooksLayout;