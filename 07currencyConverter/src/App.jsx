import { useState, useEffect } from "react";
import { Input } from "./components";
import useCurrencyInfo from "./hook/useCurrencyInfo.js";

function App() {
	const [from, setFrom] = useState("usd");
	const [to, setTo] = useState("inr");

	const [amount, setAmount] = useState(0);
	const [calculatedAmount, setcalculatedAmount] = useState(0);
	const currencyInfo = useCurrencyInfo(from);

	function convert() {
		setcalculatedAmount(amount * currencyInfo[to]);
	}

	function swap() {
		setFrom(to);
		setTo(from);
		setAmount(calculatedAmount);
		setcalculatedAmount(amount);
	}

	function changeCurrency(label, value) {
		if (label === "From") {
			setFrom(value);
		}
		if (label === "To") {
			setTo(value);
		}
	}

	function changeAmount(v) {
		setAmount(v);
		setcalculatedAmount("");
	}

	return (
		<>
			<div className="bg-red-700   rounded-lg w-1/2 m-auto mt-44 p-6 relative ">
				<Input
					label="From"
					amount={amount}
					currencyInfo={currencyInfo}
					changeCurrency={changeCurrency}
					changeAmount={changeAmount}
					selectedValue={from}
					placeholder="amount"
				></Input>

				<Input
					label="To"
					amount={calculatedAmount}
					currencyInfo={currencyInfo}
					
					changeCurrency={changeCurrency}
					selectedValue={to}
					placeholder="caluclated amount"
				></Input>

				<button onClick={swap} className=" absolute left-1/2 top-[116px] -translate-x-1/2 -translate-y-1/2 bg-blue-900 px-3 py-1 text-white font-semibold rounded border border-white">swap</button>

				<button onClick={convert} className="bg-blue-900 w-full p-2 rounded text-white text-lg">
					Convert {from.toUpperCase()} to {to.toUpperCase()}
				</button>
			</div>
		</>
	);
}

export default App;
