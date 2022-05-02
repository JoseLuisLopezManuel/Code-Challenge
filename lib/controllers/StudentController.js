const Student = require('./../services/StudentService.js');
const Reader = require('./../utils/Reader');

class StudentController{
    static getaAllStudent(student){
        return Student.Student(student);
    }
}

const leer = Reader.readJsonFile('partners.json');
const AllStudent1 = StudentController.getaAllStudent(leer);
console.log(AllStudent1);


module.exports=StudentController;