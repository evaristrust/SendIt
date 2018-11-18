import parcel from '../src/api/models/parcel';

var chai = require('chai')
var expect = chai.expect;
var should = chai.should();
var chaiHttp = require("chai-http");
var app = require('../src/app');

chai.use(chaiHttp);


//testing on getting all parcels
describe('/GET parcels', () => {
	it('It should get all parcels we have', (done) => {
		chai.request(app)
		.get('/api/v1/parcels/')
		
		.end((err, res) => {
			res.should.have.status(200);
			expect(res.body.length).to.equal(3);
			res.body.should.be.a('array');
			done();
		});

	});

});
 