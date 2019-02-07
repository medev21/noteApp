const User = require('../models/usersScherma');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/server');
const should = chai.should();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

chai.use(chaiHttp);

describe('Users', () => {

    beforeEach((done) => { //Before each test we empty the database
        User.deleteMany({}, (err) => { 
           done();           
        });        
    });

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
                res.body.should.have.be.an('Object');
                res.body.should.have.property('message').eql('User created!');
                done();
            });
        });

    });

    describe('/POST - User Login', () => {
        it('It should POST a user - Login', (done) => {

            const loginParams = {
                email: 'martin2@test.com',
                password: 'password'
            }

            bcrypt.hash(loginParams.password, 10, (err,hash) => {
                const user = new User({
                    _id: new mongoose.Types.ObjectId,
                    email: loginParams.email,
                    password: hash
                });

                user.save((err,user) => {
                    chai.request(server)
                    .post('/users/Login')
                    .send(loginParams)
                    .end((err,res) => {
                        res.should.have.status(200);
                        res.body.should.be.an('Object');
                        res.body.should.have.property('message').eql('Auth Success');
                        res.body.should.have.property('token');
                        done();
                    });
                });
            });            
        });
    });

    describe('/POST - Non existent User Login', () => {
        it('It should POST a wrong user - Login', (done) => {

            const user = {
                email: 'martin3@test.com',
                password: 'password'
            }

            chai.request(server)
            .post('/users/Login')
            .send(user)
            .end((err,res) => {
                res.should.have.status(401);
                res.body.should.be.an('Object');
                res.body.should.have.property('message').eql('Auth Failed');
                done();
            });
        });
    });

});