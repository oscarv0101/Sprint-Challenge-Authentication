const request = require("supertest");

const server = require("./auth-router");
const db = require("../database/dbConfig");

describe("Server", () => {
    describe("POST /register", () => {
        beforeEach(async () => {
          await db("users").truncate();
        });
    
        it("Returns status code 201", async () => {
          let resposne = await request(server)
            .post("/register")
            .send({
              username: "oscar",
              password: "valenzuela"
            });
          expect(response.status).toBe(201);
        });
    });

  describe("", () => {
    it("Returns status code 422", async () => {
        let response = await request(server)
          .post("/register")
          .send({
            username: "oscar"
          });
        expect(response.status).toBe(422);
      });
  });

  describe("POST /login", () => {
    it("Returns JSON", async () => {
      let response = await request(server).post("/login");
      expect(response.type).toMatch(/json/);
    });

    it("Returns status code 500", async () => {
      let response = await request(server)
        .post("/login")
        .send();
      expect(response.status).toBe(500);
    });
  });
});
