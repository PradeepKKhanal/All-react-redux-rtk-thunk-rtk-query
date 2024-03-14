import useTheme from "../context/theme"


const Button = () => {
const {themeMode, lightTheme, darkTheme}=useTheme()
    const onChangeBtn=(e)=>{
        console.log(e.target.check)
            e.target.checked?darkTheme():lightTheme()
    }
    return ( 
        
        <>
            <div className="rounded-xl flex border-2 w-fit p-2 dark:bg-black dark:text-white">
                <input type="checkbox" onChange={onChangeBtn} checked={themeMode==="dark"} />
                <p className="ml-4">ChangeTheme</p>
            </div>
        </>
     );
}
 
export default Button;