import {useState} from 'react';
function App() {
  // let counter=15;
  let [counter,setCounter]=useState(0)

  const handleIncrease=()=>{
    // counter=counter+1;
    if (counter >= 20){
      setCounter(20)
    }
    else{
    //   setCounter(counter+1)
    // console.log(counter)
    // console.log(counter+5)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)


    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    }
    
  }
 
  const handleIncrease2=()=>{
   setCounter((prevCounter)=>{
    const newCounter=prevCounter+1
    console.log(newCounter)
    return newCounter
   })
   console.log(counter)
   console.log(counter+5)
  }

  const handleDecrease=()=>{
    // counter=counter-1
    if(counter <= 0){
      setCounter(0)
    }
    else{
       console.log(counter,Math.random())
    setCounter(counter-1)
    console.log(counter,Math.random())
    }
   
  }
return(
  <>
  <h1> Counter : {counter}</h1>
  <button onClick={handleIncrease}>Increase {counter}</button>
  <button onClick={handleDecrease}>Decrease {counter}</button>
  <p>{counter}</p>
  </>
)

}

export default App
