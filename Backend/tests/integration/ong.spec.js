import request from "supertest";
import app from "../../src/app";
import connection from '../../src/database/connection';

describe("ONG", () => {

  beforeEach(async ()=>{
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async()=>{
    await connection.destroy();
  })

  it("should be able to created a new ONG", async() => {
    const response = await request(app)
      .post("/ongs")
      .send({
        name: "Jessie",
        email: "contato@apad.com.br",
        whatsapp: "81985316150",
        city: "Relcife",
        uf: "PE"
      });
      
      expect(response.body).toHaveProperty('id');
      expect(response.body.id).toHaveLength(8);
      
  });
});
