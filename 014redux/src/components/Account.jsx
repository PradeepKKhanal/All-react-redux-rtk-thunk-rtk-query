import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement, incrementByAmount} from '../store/features/account'
import {useState} from 'react'
// import {fetchData} from '../store/features/api'
// import {dispatch} from 'react-redux'
import { fetchData } from '../store/features/api'

const Account = () => {
	let dispatch =useDispatch()
	let amount=useSelector(state=>state.account.amount)
	// let apidata=useSelector(state=>state.api)
	// console.log(apidata)
	const [num,setNum]=useState()
	const handleChange=(e)=>{
		setNum(e.target.value)
	}

	return (
		<>
			<div className="border-2 flex flex-col items-center p-6 gap-3">
				<h3 className="text-red-500 font-bold">Account Component</h3>
				<p className="text-yellow-500">Amount:{amount}</p>
				<div className="flex gap-3">
					<button className="bg-gray-400 px-2" onClick={()=>{dispatch(increment())}}>Increment+</button>
					<button className="bg-gray-400 px-2" onClick={()=>{dispatch(decrement())}}>Decrement-</button>
					<input className="bg-white px-2 border-none outline-none appearance-none " type='number' onChange={(e)=>{handleChange(e)}}/>
					<button className="bg-gray-400 px-2" onClick={()=>{if(Number(num)){dispatch(incrementByAmount(Number(num)))}}}>Increment By {num}+</button>
				<button className="bg-gray-400 px-2" onClick={()=>{dispatch(fetchData())}}>Init Account</button>
				</div>
			</div>
		</>
	);
};

export default Account;
