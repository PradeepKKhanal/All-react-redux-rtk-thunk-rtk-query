
import Account from './components/Account.jsx'
import Bonus from './components/Bonus.jsx'
import {useSelector} from 'react-redux'
import Reward from './components/Reward.jsx'
import Admin from './components/Admin.jsx'
function App() {
  const bonus=useSelector((state)=>{return (state.bonus.points)})
  const api=useSelector(state=>state.api)
  console.log(api)
  return (
   <>
  <div >
				<h3 className='text-red-600 font-bold mb-3'>App</h3>
				{/* { apidata.loading? <p className="font-bold text-white">loading...</p>:apidata.error?<p className="text-red-500 bg-white font-bold px-2">Not available with message: {apidata.error}</p>:<p className='text-yellow-400 mb-3'>Amount:{apidata.data?.[0]?.amount}</p>} */}

     
      {api.status==="pending"?<p className="font-bold text-white">Loading...</p>:api.status==="rejected"?<p className="text-red-500 bg-white font-bold px-2">Error occured with message: {api.error.message}</p>:<p className='text-yellow-400 mb-3'>Amount:{api.data?.[0].amount}</p>}
				<p className='text-yellow-400 mb-3'>Total Bonus:{bonus}</p>
				
				<Account></Account>
				<Bonus></Bonus>
        <Reward></Reward>
        <Admin></Admin>
			</div>
   </>
  )
}

export default App
