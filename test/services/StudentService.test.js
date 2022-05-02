const Reader = require('./../../lib/utils/Reader')
const Student = require('./../../lib/services/StudentService')

describe('Test de cada services',()=>{
    test('Requerimiento 1: Leer archivo',()=>{
        const leer = 'partners.json';
        const student = Reader.readJsonFile(leer);
        expect(student).toMatchObject([{"id": "12364asd", "nombre": "Wanda"}])
    })

    test('Requerimiento 2: Obtener a todos los estudiantes',()=>{
        const leer = 'partners.json';
        const student = Reader.readJsonFile(leer);
        const estudiante = Student.Student(student);
        expect(estudiante).toMatchObject([{"id": "12364asd", "nombre": "Wanda"}])
    })

    test('Requerimiento 3: Obtener los emails de los explorers que tienen una certificación',()=>{
        const leer='partners.json';
        const studen = Reader.readJsonFile(leer);
        const estudiante = Student.Email(studen);
        expect(estudiante).toMatchObject([]);
    })
})