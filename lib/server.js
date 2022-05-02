const StudentController = require("./controllers/StudentController");
const express = require("express");
const Reader = require("./utils/Reader");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/",(request,response)=>{
    response.json({message:"Students Api Welcome!"});
});
app.get("/v1/students",(request,response)=>{
    const students1 = Reader.readJsonFile("visualpartners.json");
    const students = StudentController.getaAllStudent(students1);
    response.json(students);
});
app.get("/v1/students/emails",(request,response)=>{
    const students1 = Reader.readJsonFile("visualpartners.json");
    const emails = StudentController.getEmailStudent(students1);
    response.json(emails);
});
app.get("/v1/students/credits",(request,response)=>{
    const students1 = Reader.readJsonFile("visualpartners.json");
    const credits = StudentController.getNameStudent(students1);
    response.json(credits);
});
app.listen(port,()=>{
    console.log(`Students API in localhost: ${port}`);
});