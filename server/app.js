const experss = require("express");
const app = experss();
const dotenv = require("dotenv");
const CORS = require("cors");

dotenv.config({path : './config.env'})
require("./db/conn");
app.use(experss.json());
app.use(CORS());
app.use(require("./router/auth"));
app.use(require("./router/todo"));
app.use(require("./router/subscription"));


const port = process.env.PORT

const middlewire = (req,res,next)=>{
    console.log("HEllo from middle wire");
    next();
}

app.get("/", (req,res)=>{
    res.send("server running");
})

app.get("/about", middlewire,(req,res)=>{
    res.send("about");
})

app.listen(port,()=>{
    console.log(`listening from ${port}`);
})