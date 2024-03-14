let n=1
let fruit={
  fruit1:"apple",
  fruit2:"banana"
}
import Card from   './Card.jsx'
function App() {

  return (
    <>
    <h1 className="bg-red-500" style={{backgroundColor:"yellow"}}>hello buddy</h1>
    <div className="bg-blue-500 text-white p-4">Apple </div>
    <h1 className=''></h1>
    <Card username="Ram" btnvalue="visit" num={1} n={n} name={['apple','orange']} data={{name:"Pradeep",age:13}}  mer={fruit}/>
    <Card username="Hari" />


    

 </>
  )
}

export default App
