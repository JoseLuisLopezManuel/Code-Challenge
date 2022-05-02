const Student = require('./../services/StudentService.js');
const Reader = require('./../utils/Reader');

class StudentController{
    static getaAllStudent(student){
        return Student.Student(student);
    }
    static getEmailStudent(student){
        return Student.Email(student);
    }
    static getNameStudent(student){
        return Student.Names(student);
    }
}
const estudiante = Reader.readJsonFile('partners.json');
const email = StudentController.getNameStudent(estudiante);
console.log(email);

module.exports=StudentController;