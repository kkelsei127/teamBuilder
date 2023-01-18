const Employee = require('../lib/Employee');


describe('Employee class test suite', () => {
    it('should have a name property', () => {
        const name = 'kelsei'
        const emp = new Employee(name);

        expect(emp.name).toBe(name);
    })
    it('should take in an ID property', () => {
        const id = '123'
        const emp = new Employee('name', id)

        expect(emp.id).toBe(id)
    })
    it('should take in an email property', () => {
        const email = 'test@test.com'
        const emp = new Employee('name', 'id', email)

        expect(emp.email).toBe(email)
    })
    it('getName should return Name', () => {
        const name = 'kelsei'
        const emp = new Employee(name)

        expect(emp.getName()).toBe(name)
    })
    it('getId should return id', () => {
        const id = '1234'
        const emp = new Employee('name', id)

        expect(emp.getId()).toBe(id)
    })
    it('getEmail should return email', () => {
        const email = 'test@test.com'
        const emp = new Employee('name', 'id', email)

        expect(emp.getEmail()).toBe(email)
    })
})