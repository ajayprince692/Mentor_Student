let homePage = (req,res)=>{
    try{
    res.status(200).send( `<body style="background-color:Black"><div style="background-color:Blue;color:white; padding:18px;border-radius:25px;margin:13em">
   <h1 style="text-align:center;">Student Mentor Task</h1>
    <ul>
        <h2 style="text-align:center;">Student</h2>
        <h2 style="text-align:center;">Node js task-3</h2>  
        <h2 style="text-align:center;">☣☣☣☣</h2>        
    </ul>
    </div></body>`)}
    catch(error){
        res.status(500).send("Internal Server Error")
    }
     
    
}
export default { homePage }