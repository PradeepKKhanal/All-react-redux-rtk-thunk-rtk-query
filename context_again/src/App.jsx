import  Parent from './components/Parent'
import {useState} from 'react'
import { ContextProvider,usingContext } from './context/hamroContext'
function App() {
  const [fruit,setFruit]=useState('apple')
  return (
    <>
      <ContextProvider value={{fruit,setFruit}}>

        <h1>Hello</h1>
      <Parent></Parent>
      </ContextProvider>
      

    </>
  )
}

export default App
