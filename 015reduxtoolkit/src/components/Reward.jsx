import {useDispatch, useSelector} from 'react-redux'
import { increment} from '../store/slice/reward/reward.js';
import { incrementByAmount} from '../store/slice/reward/reward.js';




const Reward = () => {
    // const bonus=useSelector(state=>state.bonus.points)
    const value=useSelector(state=>state.reward.value)
    const dispatch=useDispatch()
    // console.log(increment())
	return (
		<>
			<div className="border-2 flex flex-col items-center gap-3 p-6">
				<h3 className="text-red-600 font-bold">Reward Component</h3>
				<p className='text-yellow-400'>Total point:{value}</p>
				<button className="bg-gray-500 text-black px-4" onClick={()=>dispatch(incrementByAmount(5))} >Increment+</button>
			</div>
		</>
	);
};
export default Reward