class StudentService{
    static Student(student){
        const AllStudent = student.filter((students)=> students.id.includes(""))
        return AllStudent;
    }
}
//const student = [{id:"asdqqwe1516as"}];
//const Studen1 = StudentService.Student(student);
//console.log(Studen1);
module.exports = StudentService;