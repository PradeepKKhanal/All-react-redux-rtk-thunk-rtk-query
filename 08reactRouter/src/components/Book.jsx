
import {useParams} from 'react-router-dom'
const Book = () => {
    const {bookid}=useParams();
    return ( <h1>This is book {bookid}</h1> );
}
 
export default Book;