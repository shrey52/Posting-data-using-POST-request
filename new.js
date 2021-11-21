const express = require("express")
const mongoose = require("mongoose")
const app = express()
const url = "mongodb+srv://shrey:abcdefg@cluster0.nzi6e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const myDataSchema = require('./schema');
mongoose.connect(url).then(()=>console.log("Connected to db"))

app.use(express.json())
app.post("/new-post",async(req,res)=>{
    const myStudentName = req.body.StudentName;
    const myRegistrationNumber = req.body.RegistrationNumber;
    const myMarks = req.body.Marks;

    try{
        const newData = new myDataSchema({
            StudentName : myStudentName,
            RegistrationNumber : myRegistrationNumber,
            Marks : myMarks
        })
        const savednewData = await newData.save()
        res.json(
            {"message":"Data is saved","data":savednewData}
        )
    }catch(err){
        res.json(err);
    }
})

app.use("/",(req,res)=>{
    res.json(
        {"key" : "value"}
    )
})

app.listen(3001, ()=>console.log("Experss server started"))