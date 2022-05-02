const Reader = require("./../../lib/utils/Reader");
const Student = require("./../../lib/services/StudentService");
const StudentController = require("./../../lib/controllers/StudentController");
describe("Test de cada services",()=>{
    test("Requerimiento 1: Leer archivo",()=>{
        const leer = "partners.json";
        const student = Reader.readJsonFile(leer);
        expect(student).toMatchObject([{"id": "12364asd", "name": "Wanda"}]);
    });

    test("Requerimiento 2: Obtener a todos los estudiantes",()=>{
        const leer = "partners.json";
        const student = Reader.readJsonFile(leer);
        const estudiante = Student.Student(student);
        expect(estudiante).toMatchObject([{"id": "12364asd", "name": "Wanda"}]);
    });

    test("Requerimiento 3: Obtener los emails de los estudiantes que tienen una certificación",()=>{
        const leer="partners.json";
        const studen = Reader.readJsonFile(leer);
        const estudiante = Student.Email(studen);
        expect(estudiante).toMatchObject([]);
    });

    test("Requerimiento 4: Obtener los nombres de los estudiantes con creditos mayores a 500",()=>{
        const leer="partners.json";
        const studen = Reader.readJsonFile(leer);
        const estudiante = Student.Names(studen);
        expect(estudiante).toMatchObject(["Wanda"]);
    });
    describe("Test de cada controller",()=>{
        test("Requerimiento 5: Leer archivo",()=>{
            const leer = Reader.readJsonFile("partners.json");
            const AllStudent1 = StudentController.getaAllStudent(leer);
            expect(AllStudent1).toMatchObject([{    
                "id":"12364asd",
                "name": "Wanda",
                "haveCertification" : false,
                "email":"jasoqweasd@maslqwe.com",
                "credits":600 
            }]);
        });
        test("Requerimiento 6: Obtener email de estudiantes con certificacion",()=>{
            const leer = "partners.json";
            const student = Reader.readJsonFile(leer);
            const estudiante = StudentController.getEmailStudent(student);
            expect(estudiante).toMatchObject([]);
        });
        test("Requerimiento 7: Obtener nombres de estudiantes con creditos mayores a 500",()=>{
            const leer = "partners.json";
            const student = Reader.readJsonFile(leer);
            const estudiante = StudentController.getNameStudent(student);
            expect(estudiante).toMatchObject(["Wanda"]);
        });
    });
});
