import {useOutletContext} from 'react-router-dom'
const BookList = () => {
    const context=useOutletContext()
    console.log(context)
    return ( <h1>This is booklist {context}</h1> );
}
 
export default BookList;