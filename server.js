const express=require("express");
const app=express();
let PORT=5000;
app.use(express.json())
app.listen(PORT,()=>{
    try
    {
        console.log("server is connected with :",PORT);     
    }
    catch(error)
    {
        console.log("Server is not connected");  
    }
})


