import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsync } from "./productsSlice";
// import {} from './productsSlice';
import "./products.css";
import { addItemAsync, updateItemAsync } from "../cart/cartSlice";

export function Products() {
	const [quantity,setQuantity]=useState(1)
	const [showProducts,setShowProducts]=useState("Show")
	const dispatch = useDispatch();
	const products = useSelector((state) => state.product.products);
	console.log(products);
	const carts=useSelector((state)=>state.cart.items)
	console.log(carts)

	useEffect(()=>{dispatch(fetchAsync())},[])
	return (
		<>
			<button
				onClick={
					() => {
						if(showProducts=="Show"){
						
						setShowProducts("Hide")
						}
						else{
							setShowProducts("Show")
						}
					;
				}}
			>
				{showProducts} products
			</button>

			{showProducts==="Hide" && products?.map((product) => (
				<div className="card" key={product?.id}>
					<img
						src={product?.thumbnail}
						alt="Denim Jeans"
						style={{ width: "100%" }}
					/>
					<h1>{product?.title}</h1>
					<p className="price">${product?.price}</p>
					<p>{product?.description}</p>
					<p>
						<button
							onClick={() => {
								const {id,title,brand,description,price,thumbnail}=product;
								if (carts.every((cartItem)=>{return(cartItem.id!==id)})){
									dispatch(addItemAsync({id,title,brand,description,price,thumbnail,quantity:quantity}));
								}
								

							}}
						>
							Add to Cart
						</button>
					</p>

					<select name="" id="" value={carts?.[carts?.findIndex((cart)=>cart.id===product.id)]?.quantity}  onChange={(e)=>{
						// const index=carts.findIndex((cartItem)=>cartItem.id===)
						setQuantity(e.target.value)
						// dispatch(updateItemAsync({id:product.id, quantity:e.target.value}))
					}} >
					
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
				</div>
			))}
		</>
	);
}
