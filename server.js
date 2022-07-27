const {mail,MakeCertificate,verifyDocument} =require("./src/apis/appsScriptApi");
const express=require("express")
const app = express();
const cors = require("cors");


//cors libarary is for handling security messages from browser(while using xhttp requests)
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "GET"],
    credentials: true,
  })
);


// middleware
app.use(express.json());
app.use(express.urlencoded());

app.post("/MakeCert",async (req,res)=>{
    console.log("Making Certificate");
    try{
        await MakeCertificate(req.body.data);
    }catch(err){
        console.log("\n\nerror ->"+err.data)
    }
})

app.post("/sendToVerify",async (req,res)=>{
    try{
        await verifyDocument(req.body.data)
    }catch(err){
        console.log("error ->"+err)
    }
})

app.post("/declineQuery",async (req,res)=>{
    try{
        console.log(req.body.message)
        await mail(req.body.message)
        res.send("Mailed Perfectely");
    }catch(err){
        console.log("\n\nerror ->"+err.data)
    }
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));