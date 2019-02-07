const User = require('../models/usersScherma');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/server');
const should = chai.should();
const mongoose = require('mongoose');

chai.use(chaiHttp);

User.deleteMany();

describe('Users', () => {

    // beforeEach((done) => { //Before each test we empty the database
    //     User.deleteMany({}, (err) => { 
    //        done();           
    //     });        
    // });

    describe('/POST - User Signup', () => {
        it('It should POST a user - create', (done) => {

            const user = {
                email: 'martin@test.com',
                password: 'password'
            }

            chai.request(server)
            .post('/users/signup')
            .send(user)
            .end((err,res) => {
                res.should.have.status(201);
                done();
            });
        });

    });

    describe('/POST - User Login', () => {
        it('It should POST a user - Login', (done) => {

            const loginParams = {
                email: 'martin@test.com',
                password: 'password'
            }

            chai.request(server)
            .post('/users/Login')
            .send(loginParams)
            .end((err,res) => {
                res.should.have.status(200);
                res.body.should.be.an('Object');
                res.body.should.have.property('message').eql('Auth Success');
                done();
            });

        });
    });

    

    describe('/POST - Non existent User Login', () => {
        it('It should POST a wrong user - Login', (done) => {

            const user = {
                email: 'martin2@test.com',
                password: 'password'
            }

            chai.request(server)
            .post('/users/Login')
            .send(user)
            .end((err,res) => {
                res.should.have.status(401);
                // res.body.should.be.an('Object');
                // res.body.should.have.property('message').eql('Auth Success');
                done();
            });
        });
    });

});

User.deleteMany();