import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	fetchItemAsync,
	addItemAsync,
	updateItemAsync,
	deleteItemAsync,
} from "./cartSlice";
import "./cart.css";

export function Cart() {
	const [showCart, setShowCart] = useState("Show");
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchItemAsync());
	}, []);
	const data = useSelector((state) => {
		return state.cart.items;
	});
	// const dispatch = useDispatch();
	return (
		<>
			<div>
				{/* <button
				onClick={() => {
					dispatch(fetchItemAsync());
				}}
			>
				Fetch Cart
			</button>

			<button
				onClick={() => {
					dispatch(
						addItemAsync({
							id: "new once again",
							name: "this is item",
							price: 55,
						})
					);
				}}
			>
				Add Cart
			</button>
			<button
				onClick={() => {
					dispatch(updateItemAsync({id:"new once again",name:"this is updated one",price:"this is updated price"}));
				}}
			>
				Update cart
			</button>
			<button
				onClick={() => {
					dispatch(deleteItemAsync("new once again"));
				}}
			>
				Delete cart
			</button>

			{data?.map((datum)=>{return(<p key={datum?.id}>{datum?.name}</p>)})} */}
			</div>
			<button
				onClick={() => {
					if(showCart==="Show"){
						setShowCart("Hide");
					}
					else{
						setShowCart("Show")
					}
					
				}}
			>
				{showCart} cart ({data?.length})
			</button>

			{showCart==="Hide" &&
				data.map((datum) => {
					return (
						<div className="cart-card" key={datum.id}>
							<img src={datum.thumbnail} alt="" />
							<div className="info">
								<p>{datum.title}</p>
								<p>{datum.brand}</p>
								<p>{datum.price}</p>
							</div>
							<div>
								<p>Quantity</p>
								{/* <select
									name=""
									id=""
									value={datum.quantity}
									onChange={(e) => {
										dispatch(
											updateItemAsync({
												id: datum.id,
												quantity: e.target.value,
											})
										);
									}}
								>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
								</select> */}
								<div className="flex">
									<button
										onClick={() => {
											if(datum.quantity<3){
												dispatch(
												updateItemAsync({
													id: datum.id,
													quantity: Number(datum.quantity) + 1,
												})
											);
											}
											
										}}
									>
										+
									</button>
									<p>{datum.quantity}</p>
									<button
										onClick={() => {
											if(datum.quantity>0){
												dispatch(
												updateItemAsync({
													id: datum.id,
													quantity: Number(datum.quantity) - 1,
												})
											);
											}
											
										}}
									>
										-
									</button>
								</div>
							</div>
							<div>
								<button
									onClick={() => {
										dispatch(deleteItemAsync(datum.id));
									}}
								>
									Delete
								</button>
							</div>
						</div>
					);
				})}

			{showCart==="Hide" && (
				<div>
					{" "}
					Total:
					{data?.reduce((accum, item) => item.price * item.quantity + accum, 0)}
				</div>
			)}
		</>
	);
}
