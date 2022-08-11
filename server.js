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
        const resps=await MakeCertificate(req.body.data);
        console.log("Mailing status from backend ->"+resps)
        res.send(resps);
    }catch(err){
        console.log("\n\nerror ->"+err.data)
        res.send("error from backend ->"+err)
    }
})

app.post("/sendToVerify",async (req,res)=>{
    try{
        const resps=await verifyDocument(req.body.data)
        console.log("Mailing Status from backend ->"+resps)
        res.send(resps)
    }catch(err){
        console.log("error from backend ->"+err)
        res.send("error from backend ->"+err)
    }
})

app.post("/declineQuery",async (req,res)=>{
    try{
        const resps=await mail(req.body.message)
        console.log("Mailing Status from backend ->"+resps)
        res.send(resps)
    }catch(err){
        console.log("error from backend ->"+err)
        res.send("error from backend ->"+err)
    }
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));