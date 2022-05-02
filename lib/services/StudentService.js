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
    static Creditos(studen){
        const creditos = studen.filter((student)=>student.credits > 500);
        return creditos;
    }
    static Names(studen){
        const creditos = StudentService.Creditos(studen);
        const name = creditos.map((students)=> students.name);
        return name;
    }


}
//const student = [{id:"asdqqwe1516as"}];
//const Studen1 = StudentService.Student(student);
//console.log(Studen1);
module.exports = StudentService;