import Child from "./Child";
import { ContextProvider,usingContext  } from "../context/hamroContext";
const Parent = () => {
    const val=usingContext();
    console.log(val.fruit)
    return ( 
        <>
        {/* <ContextProvider> */}
            <h1>This is Parent {val.fruit}</h1>
                    <Child>

                    </Child>

        {/* </ContextProvider> */}
        
        </>
       
     );
}
 
export default Parent;