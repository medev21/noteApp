const User = require('../models/usersScherma');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/server');
const should = chai.should();

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
                done();
            });
        });
    });

    describe('/POST - User Login', () => {
        it('It should POST a user - Login', (done) => {

            const user = {
                email: 'martin@test.com',
                password: 'password'
            }

            chai.request(server)
            .post('/users/Login')
            .send(user)
            .end((err,res) => {
                res.should.have.status(200);
                res.body.should.be.an('Object');
                res.body.should.have.property('message').eql('Auth Success');
                done();
            });
        });
    });

});