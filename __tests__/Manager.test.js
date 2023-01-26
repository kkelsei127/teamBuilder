const Manager = require('../lib/Manager');

describe('Manager class test suite', () => {
    it('should have a office number property', () => {
        const officeNumber = 1234
        const manager = new Manager('name', 'id', 'email', officeNumber);

        expect(manager.officeNumber).toBe(officeNumber);
    })
    it('getOfficeNumber should return office number', () => {
        const officeNumber = 1234
        const manager = new Manager('name', 'id', 'email', officeNumber)

        expect(manager.getOfficeNumber()).toBe(officeNumber)
    })
})