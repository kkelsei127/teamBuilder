const Employee = require('../lib/Employee');


describe('Employee class test suite', () => {
    it('should have a name property', () => {
        const name = 'kelsei'
        const emp = new Employee(name);

        expect(emp.name).toEqual(name);
    })
})