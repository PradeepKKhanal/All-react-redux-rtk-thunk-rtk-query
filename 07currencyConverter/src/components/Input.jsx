import {useId} from 'react'

function Input({label,amount,currencyInfo,changeCurrency,changeAmount,selectedValue,placeholder}) {

    const inputId=useId()
    let currencyInfokeys=Object.keys(currencyInfo)
    return (
        <div className='bg-white mb-4 p-2 rounded flex justify-between border border-black'>
            <div className='text-gray-400 flex flex-col justify-between '>
                <label htmlFor={inputId}>{label}</label>
                <input type="number" value={amount}  onChange={ (e)=>{ changeAmount && changeAmount(e.target.value)}} id={inputId} className='text-black py-2 inline-block w-full outline-none placeholder-gray-300 placeholder-thing' placeholder={placeholder}/>
            </div>
            <div className='flex flex-col justify-between border-spacing-1 '>
               <p className='text-gray-400'>Currency Type</p>

                <select className='text-black  bg-gray-100 p-2 rounded' name={label} value={selectedValue} id="" onChange={(e)=>{
                    
                   changeCurrency( e.target.getAttribute('name'), e.target.value)}}>

                    {currencyInfokeys.map((currency)=>{return(
                        <option value={currency} key={currency} >{currency}</option>
                    )})}
                </select>
            </div>
        </div>
      );
}

export default Input;