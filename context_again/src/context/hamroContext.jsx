// import {contextProvider} from 'react'
import { createContext,useContext } from "react";

const meroContext=createContext('Nepal')


function ContextProvider({children,value}){
    
    return(
       <meroContext.Provider value={value} >
        {children}
       </meroContext.Provider>
    )
}

function usingContext(){
    return useContext(meroContext)
}

export {ContextProvider,usingContext}