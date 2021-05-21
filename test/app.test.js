const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

const { expect } = chai;
chai.use(chaiHttp);

describe("Base routes", () => {
  it("provides a response to the health endpoint", (done) => {
    chai
      .request(app)
      .get("/health")
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe("Additional Routes", () => {

});
