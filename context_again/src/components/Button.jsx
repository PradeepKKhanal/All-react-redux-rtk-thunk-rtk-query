import { usingContext } from "../context/hamroContext";

const Button = () => {
    const val=usingContext();
    return ( 
        <button onClick={()=>{
            val.setFruit('Changed Fruit')
        }}>
            Change Fruit
        </button>
     );
}
 
export default Button;