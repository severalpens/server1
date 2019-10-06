// process.env.NODE_ENV = "test";

const expect = require("chai").expect;
const request = require("supertest");
const mongoose = require("mongoose");
const model = require('../../../server/model')
const app = require("../../../app.js");
const conn = require("../../../index");


describe("POST /api/product", () => {
  before(done => {
    conn
      .connect()
      .then(() => done())
      .catch(err => done(err));
  });

  after(done => {
    conn
      .close()
      .then(() => done())
      .catch(err => done(err));
  });

  it("OK, creating a new note works", done => {
    request(app)
      .post("/api/product")
      .send({Id: 1, Name: "Product1", Description: "description for Product1", Price: 1, Units: 1 })
      .then(res => {
        const body = res.body;
        expect(body).to.contain.property("Name");
      });
  });
});
