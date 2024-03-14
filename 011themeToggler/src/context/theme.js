
import { createContext,useContext} from "react";

const ThemeContext= createContext({
    themeMode:'light',
    darkTheme:()=>{},
    lightTheme:()=>{}
})

const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}

export  {ThemeContext, ThemeProvider}