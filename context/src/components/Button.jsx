import { useContext } from "react";
import { hamroContext } from "./Parent";

const Button = ({children}) => {
  const hamroValue = useContext(hamroContext);
        console.log();
        const clickHandle = () => {
            hamroValue.setFruit("banana");
        };
    return (
       <button onClick={clickHandle}>
        {children}
       </button>
      );
}
 
export default Button;