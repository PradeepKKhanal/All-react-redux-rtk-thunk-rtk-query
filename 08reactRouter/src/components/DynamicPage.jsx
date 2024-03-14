import {useParams} from 'react-router-dom'

const DynamicPage = () => {
    const {id}=useParams()
    console.log(useParams())
    return (
        <>
        this is dyanmic page {id}
        
        </>
      );
}
 
export default DynamicPage;