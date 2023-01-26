const Intern = require('../lib/Intern');

describe('Intern class test suite', () => {
    it('should have a school property', () => {
        const school = 'UCF'
        const intern = new Intern('name', 'id', 'email', school);

        expect(intern.school).toBe(school);
    })
    it('getSchool should return school', () => {
        const school = 'UCF'
        const intern = new Intern('name', 'id', 'email', school)

        expect(intern.getSchool()).toBe(school)
    })
})