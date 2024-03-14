import { usingContext } from "../context/hamroContext";
import Button from "./Button";
const Child = () => {
    const val=usingContext();
     console.log(val.fruit)
    return ( 
        <>
         <h1>This is child {val.fruit}</h1>
        <Button></Button>
        </>
       
     );
}
 
export default Child;
