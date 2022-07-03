const mail =require("./src/apis/appsScriptApi.js");
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


app.get("/sendMail",async (req,res)=>{
    console.log("Sending Mail");
    try{
        await mail(req.query.message)
    }catch(err){
        console.log("\n\nerror ->"+err)
    }
    res.send("Mailed Perfectely");
})



const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));