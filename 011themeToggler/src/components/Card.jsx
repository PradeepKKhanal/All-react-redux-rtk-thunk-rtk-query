

const Card = () => {
    return ( <>
     <div className="card w-72 ml-56 mt-32 border-4 rounded-xl p-4 dark:bg-black dark:text-white">
        <img src="https://images.unsplash.com/photo-1617469165786-8007eda3caa7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full"/>
        <h2 className="font-bold">Name</h2>
        <h3 className="font-semibold">short info</h3>
        <p className="">this is all about the images shown in the card do you like it or not ? Just say me ok.</p>
     </div>
    </> );
}
 
export default Card;