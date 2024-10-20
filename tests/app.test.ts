import request from "supertest";
import app from "../index";

describe("API endpoint /api/estimate", () => {
    const prefix = "/api/estimate"
  // POST - get estimate fee
  it("should return estimate fee for text inscription", async () => {
    const res = await request(app)
      .post(`${prefix}/text`)
      .send({
        receiveAddress: "tb1psrhndrraych9fjmqg2xp0ertfcy9ywu123jvmu64fvjmwzz99hhqxcf9v9",
        contents: "{\"data\" : [\"Hello World\"]}",
        feeRate: 50,
        padding: 5
      })
      .expect("Content-Type", /json/);
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty('total')
  });
});
