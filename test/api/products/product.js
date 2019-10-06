const expect = require('chai').expect;
const request = require('supertest');
const mongoose = require('mongoose');

const app = require('../../../app.js');
const conn = require('../../../index.js')

const app = require('../../../app.js');

describe('POST /products', () => {
    before((done) => {
        conn.close()
        .then(() => done ())
        .catch((err) => done (err))
        
    })

})



after((done) => {
    conn.close()
        .then(() => done())
        .catch((err) => done(err))
})

if('OK, creating a new note works', (done) => {
    requiest(app).post()
})