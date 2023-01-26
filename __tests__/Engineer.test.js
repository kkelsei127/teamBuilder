const Engineer = require('../lib/Engineer');

describe('Engineer class test suite', () => {
    it('should have a github property', () => {
        const github = 'kkelsei127'
        const engineer = new Engineer('name', 'id', 'email', github);

        expect(engineer.github).toBe(github);
    })
    it('getGithub should return github', () => {
        const github = 'kkelsei127'
        const engineer = new Engineer('name', 'id', 'email', github)

        expect(engineer.getGithub()).toBe(github)
    })
})