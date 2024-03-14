import {useState} from 'react'
import Button from './Button'



let btncolor=["red","green","blue","orange","yellow","pink","purple"]
let btncolorinfo={
    red:"bg-red-600",
    blue:"bg-blue-600",
    green:"bg-green-600",
    yellow:"bg-yellow-600",
    orange:"bg-orange-600",
    pink:"bg-pink-600",
    purple:"bg-purple-600"
}



function App(){
         
        let [color,setColor]=useState("")

        const handleClick=(e)=>{
            // console.dir(e.target.parentElement.className)
            setColor(btncolorinfo[e.target.innerText])
        }

        return(
            <div className={`flex justify-center h-screen items-end ${color}`}>  
               {btncolor.map((color)=>{
                console.log(btncolorinfo[color])
                return(
                    <Button colorName={color} bgcolor={btncolorinfo[color]} key={Math.random()} handleClick={handleClick}></Button>
                )
               })}
            </div>
          
           
        )
}

export default App