const Reader = require('./../../lib/utils/Reader')
const Student = require('./../../lib/services/StudentService')

describe('Test de cada services',()=>{
    test('Requerimiento 1: Leer archivo',()=>{
        const leer = 'partners.json'
        const student = Reader.readJsonFile(leer)
        expect(student).toMatchObject([{"id": "12364asd", "nombre": "Wanda"}])
    })
})