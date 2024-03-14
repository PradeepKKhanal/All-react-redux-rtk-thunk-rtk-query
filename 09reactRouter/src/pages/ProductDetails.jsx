
import {useParams} from 'react-router-dom'
const ProductDetails = () => {
    const {productid}=useParams();
    return ( <>
    <h1> 
        This is the product {productid}
    </h1>
    </> );
}
 
export default ProductDetails;