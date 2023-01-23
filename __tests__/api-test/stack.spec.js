const request = require('supertest');
const app = require('../../app');
describe('Put API', () => { 
    it('should respond with error message if value type is not number ' , async () => {
        const response = await request(app).put("/").send({value:"test John"});
        expect(response.text).toBe('value should be of number type');
        expect(response.status).toBe(400)
    })
    it('should respond with error message if value is not present ' , async () => {
        const response = await request(app).put("/").send();
        expect(response.text).toBe('value should be present');
        expect(response.status).toBe(400)
    })
 })