const User = require('../models/usersScherma');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/server');

chai.use(chaiHttp);

describe('Users', () => {

    beforeEach((done) => { //Before each test we empty the database
        User.deleteMany({}, (err) => { 
           done();           
        });        
    });

    describe('/POST - Users', () => {
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
            });
        });
    });
});