class StudentService{
    static Student(student){
        const AllStudent = student.filter((students)=> students.id.includes(""));
        return AllStudent;
    }
    static Certificacion(studen){
        const Certifi = studen.filter((students) => students.haveCertification == true);
        return  Certifi;
    }
    static Email(studen){
        const Certifica = StudentService.Certificacion(studen);
        const emails = Certifica.map((studens)=>studens.email);
        return emails;
    }

}
//const student = [{id:"asdqqwe1516as"}];
//const Studen1 = StudentService.Student(student);
//console.log(Studen1);
module.exports = StudentService;