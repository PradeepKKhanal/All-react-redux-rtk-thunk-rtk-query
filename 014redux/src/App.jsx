import Account from "./components/Account";
import Bonus from "./components/Bonus";
import {useDispatch, useSelector} from 'react-redux'
import {fetchData} from './store/features/api'
import {useEffect} from 'react'
function App() {
	const amount=useSelector((state)=>state.account.amount)
	const bonus=useSelector((state)=>state.bonus.point)
	const dispatch=useDispatch()
	// useEffect(()=>{dispatch(fetchData())},[])
	
	let apidata=useSelector(state=>state.api)
	console.log(apidata)
	console.log(fetchData)
	// console.log(apidata.data[0].amount)
	return (
		<>
			<div >
				<h3 className='text-red-600 font-bold mb-3'>App</h3>
				{ apidata.loading? <p className="font-bold text-white">loading...</p>:apidata.error?<p className="text-red-500 bg-white font-bold px-2">Not available with message: {apidata.error}</p>:<p className='text-yellow-400 mb-3'>Amount:{apidata.data?.[0]?.amount}</p>}

				{/* {apidata.isLoading? <p>Loading...</p>: apidata.data?<p className='text-yellow-400 mb-3'>Amount:{apidata.data[0].amount}</p>:<p>No data available</p>} */}
				{/* <p className='text-yellow-400 mb-3'>Current Amount:{amount}</p> */}
				{/* <p className='text-yellow-400 mb-3'>Current Amount:{apidata.data[0].amount}</p> */}
				<p className='text-yellow-400 mb-3'>Total Bonus:{bonus}</p>
				
				<Account></Account>
				<Bonus></Bonus>
			</div>
		</>
	);
}

export default App;
