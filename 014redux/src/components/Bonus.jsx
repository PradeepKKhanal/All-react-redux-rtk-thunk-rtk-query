import {useSelector,useDispatch} from 'react-redux'
import {increment } from '../store/features/bonus.js'


const Bonus = () => {
	const bonus=useSelector((state)=>{return (state.bonus.point)})
	const dispatch=useDispatch()
	return (
		<>
			<div className="border-2 flex flex-col items-center gap-3 p-6">
				<h3 className="text-red-600 font-bold">Bonus Component</h3>
				<p className='text-yellow-400'>Total point:{bonus}</p>
				<button className="bg-gray-500 text-black px-4" onClick={()=>{dispatch(increment())}}>Increment+</button>
			</div>
		</>
	);
};

export default Bonus;
