import { useContext } from "react";
import { hamroContext } from "./Parent";
import Button from './Button'
const Child = (props) => {
	const hamroValue = useContext(hamroContext);
	console.log(props);
	
	return (
		<>
        {hamroValue.fruit}
			<h1>This is child component {hamroValue.fruit}</h1>
			{props.children}
            <Button>Change Fruit</Button>
		</>
	);
};

export default Child;
