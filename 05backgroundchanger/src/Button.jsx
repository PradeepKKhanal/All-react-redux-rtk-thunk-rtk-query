

function Button({colorName, bgcolor,handleClick}){
    return(
        
        <button className={`${bgcolor} m-4 px-4 rounded-2xl border-2 border-white shadow-2xl text-xl`} onClick={handleClick}>{colorName} </button>
    )
}


export default Button