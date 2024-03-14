// import {contextProvider} from 'react'
import { createContext,useContext } from "react";

const meroContext=createContext('Nepal')


function contextProvider({children}){
    
    return(
       <meroContext.Provider >
        {children}
       </meroContext.Provider>
    )
}

function usingContext(){
    return useContext(meroContext)
}

export {contextProvider,usingContext}