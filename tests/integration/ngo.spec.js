const request = require('supertest');
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe('NGO', () => {
    beforeEach( async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () =>{
        await connection.destroy();
    });


    it('should be able to create a new NGO', async () => {
        const response = await request(app).post('/ngo').send({
            name: "b",
            email: "b@gmail.com",
            whatsapp: "11999999999",
            city:"a",
            uf:"aa"
        });

        console.log(response.body);

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});