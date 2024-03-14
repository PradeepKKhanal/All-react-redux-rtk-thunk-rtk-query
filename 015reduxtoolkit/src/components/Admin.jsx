// we are importing the query and mutation hook from the RTK query 
import {
	useGetAccountByIdQuery,
	usePutAccountByIdMutation,
	useUpdateAccountByIdMutation,
	useDeleteAccountByIdMutation
} from "../store/slice/adminApi/adminApiSlice";

// we are importing the hooks from react
import { useState, useEffect } from "react";

// functional component 
const Admin = () => {
	const [updatingError, setUpdatingError] = useState(null);
	const [newAmount, setNewAmount] = useState();
	const [updateAmount, setUpdateAmount] = useState();
	const [updateRequire, setUpdateRequire] = useState(null);
	// const [myAllData,setMyAllData]=useState([])
	const [updatingStatus, setUpdatingStatus] = useState([]);
	const [deletingStatus, setDeletingStatus] = useState([]);

	const [
		postAccount,
		{ isLoading: postLoading, error: posterror, data: postdata },
	] = usePutAccountByIdMutation();
	const { data, error, isLoading } = useGetAccountByIdQuery();
	let [
		updateAccount,
		{ isLoading: updateLoading, error: updateerror, data: updatedata },
	] = useUpdateAccountByIdMutation();
	const [deleteAccount,{isLoading:deleteLoading,error:deleteerror,data:errordata}]=useDeleteAccountByIdMutation()

	console.log(data, error, isLoading);
	useEffect(() => {
		setUpdatingStatus(
			data?.map(() => {
				return false;
			})
		);
		setDeletingStatus(
			data?.map(() => {
				return false;
			})
		);
	}, [data]);
	// if(data){
	//   setUpdatingStatus((prev)=>{return(prev.map((value)=>{return(false)}))})
	// }

	const handleDataSubmission = (e) => {
		e.preventDefault();
		postAccount({ id: String(Math.random()), amount: newAmount });

		e.target.reset();

		console.log(newAmount);
	};

	const handleDataUpdation = (e, id, amount) => {
		e.preventDefault();
		console.log(amount);
		setUpdatingError(null);
		if (amount) {
			
		
			updateAccount({ id, amount })
				.then((response)=>{	
						// setUpdatingStatus((prev) => {
						// 	return prev.map((i, j) => {
						// 		return false;
						// 	});
						// });
						if (!response.ok) {
							// Handle error response (e.g., display error message to the user)
							throw new Error('Failed to update account: ' + response.statusText);
						  }
				}	
				)
				.catch((error) => {
					setUpdatingError(error);
					console.log(error);
				});
			setUpdateAmount("");
			// console.log(error);
		}
		console.log(updateerror);
	};

	return (
		<>
			<h1 className="text-red-700 font-bold">Admin Component</h1>
			{isLoading ? (
				<p>Loading...</p>
			) : error ? (
				<p>Error occured:{error.data}</p>
			) : (
				data.map((item, index) => {
					return (
						<div
							key={item.id}
							className="bg-green-400 m-3 block w-fit px-4 py-2"
						>
							{item.amount}{" "}
							<button className="border-green-900 border-2 px-2 py-0 rounded-lg shadow-emerald-900" onClick={()=>{
								setDeletingStatus((prev) => {
									return prev.map((i, j) => {
										if (j == index) {
											return true;
										} else {
											return false;
										}
									});
								});
								deleteAccount(item.id)}}>
								Delete
							</button>{" "}
							<button
								className="bg-green-900 text-white px-2 py-1 rounded-lg shadow-emerald-900 "
								onClick={(e) => {
									updateerror = null;
									updatingStatus?.[index];
									setUpdateRequire((prev) => (prev === index ? null : index));
									setUpdatingStatus((prev) => {
										return prev.map((i, j) => {
											if (j == index) {
												return true;
											} else {
												return false;
											}
										});
									});
									handleDataUpdation(e, item.id, updateAmount);
								}}
							>
								Update
							</button>
							{updateRequire === index && (
								<input
									type="text"
									onChange={(e) => {
										setUpdateAmount(e.target.value);
									}}
								/>
							)}
							{updatingStatus?.[index] && updateLoading && (
								<p className="inline-block mx-3">Updating...</p>
							)}
							{updatingStatus?.[index] && updatingError && (
								<p className="inline-block mx-3">
									Error occured :{updatingError.message}
								</p>
							)}
							{deletingStatus?.[index] && deleteerror && (
								<p className="inline-block mx-3">
									Could not delete :{deleteerror.error}
								</p>
							)}

						</div>
					);
				})
			)}

			<form
				onSubmit={(e) => {
					handleDataSubmission(e);
				}}
			>
				<p>Add the new data</p>
				<input
					type="text"
					className="border-2 border-red-500"
					placeholder="Enter the new data"
					onChange={(e) => {
						setNewAmount(e.target.value);
					}}
				/>
			</form>

			{/* <form onSubmit={handleDataSubmission}>
            <p>Update the data</p>
        <input type="text" className="border-2 border-red-500 mr-6" placeholder="Enter the new data"/>
        <input type="number" className="border-2 border-red-500 " placeholder="Enter the id" />
        </form>       */}
		</>
	);
};

export default Admin;
