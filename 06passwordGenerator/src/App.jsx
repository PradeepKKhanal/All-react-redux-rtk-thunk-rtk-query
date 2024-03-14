import { useState, useEffect, useRef,useCallback } from "react";

function App() {
	const [length, setLength] = useState(10);
	const [isNumberAllowed, setIsNumberAllowed] = useState(false);
	const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);
	const [password, setPassword] = useState("");
	const passwordRef = useRef();
	// console.log(passwordRef);

 
	const passwordGenerator =  useCallback(() => {
    
		let randomValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		if (isNumberAllowed) {
			randomValues += "0123456789";
		}
		if (isCharacterAllowed) {
			randomValues += "!@#$%^&*()<>?/|";
		}
		let password = "";
		for (let i = 0; i < length; i++) {
			password += randomValues[Math.floor(Math.random() * randomValues.length)];
		}
		// console.log(password);
		setPassword(password);
	},[isNumberAllowed,isCharacterAllowed,length])

 
  const copyToClipboard= useCallback(()=>{
    navigator.clipboard.writeText(passwordRef.current.innerText);
            const range = document.createRange();
            const selection = window.getSelection();
            // range.selectNodeContents(passwordRef.current);
            range.setStart(passwordRef.current.firstChild,0)
            range.setEnd(passwordRef.current.firstChild,5)
            selection.removeAllRanges();
            selection.addRange(range);
            setTimeout(()=>{ selection.removeAllRanges()},500)
  }
,[password])
	useEffect(passwordGenerator, [length, isNumberAllowed, isCharacterAllowed]);
	// console.log(navigator);
	// console.log(passwordRef.current);

	return (
		<>
			<div className="card bg-red-500 w-2/3 m-auto mt-10 p-10">
        <div className="flex  items-center">
          	<div ref={passwordRef} className=" border-2 p-2 bg-white shadow-lg rounded-md rounded-r-none w-4/5">{password}</div>
				<div
					onClick={
            copyToClipboard
          }
          className=" bg-blue-500 text-center p-2 rounded-md rounded-l-none cursor-pointer"
				>
					Copy
				</div>
        </div>
			
				<div className="p-2 mt-6 flex items-center ">
          <div >
            <input
						type="range"
						min="6"
						max="20"
						value={length}
						id="lengthbar"
						onChange={(e) => {
							setLength(e.target.value);
						}}
					/>

					<label htmlFor="lengthbar">Length({length})</label>
          </div >
					
            <div className="ml-5">
              <input
						type="checkbox"
						id="numbers"
            defaultChecked={isNumberAllowed}
						onChange={() => {
							setIsNumberAllowed((v) => !v);
						}}
					/>
					<label htmlFor="numbers">Numbers</label>
            </div>
					


            <div className="ml-5"> 
              <input
						type="checkbox"
						id="characters"
            defaultChecked={isCharacterAllowed}
						onChange={() => {
							setIsCharacterAllowed((v) => !v);
						}}
					/>
					<label htmlFor="characters">Characters</label>
            </div>
					
				</div>
			</div>
		</>
	);
}

export default App;
