import Child from "./Child";
import { createContext ,useState,useContext } from "react";

export const hamroContext = createContext("apple");
console.log(hamroContext);

const Parent = () => {

    const [fruit, setFruit]=useState('mango')
    const val=useContext(hamroContext)
    console.log(val)
	return (
		<>
			<hamroContext.Provider value={{fruit,setFruit}}>
				<h1>this is parent {val}</h1>
				<Child>
					this is passed from parent
					<h1>This is also passed from parent</h1>
				</Child>
			</hamroContext.Provider>
		</>
	);
};

export default Parent;
