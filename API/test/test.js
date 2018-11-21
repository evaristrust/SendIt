import parcel from '../src/api/models/parcel';

const chai = require('chai')
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require("chai-http");
const app = require('../src/app');

chai.use(chaiHttp);


//testing on getting all parcels
describe('/GET parcels', () => {
	it('It should get all parcels we have', (done) => {
		chai.request(app)
		.get('/api/v1/parcels/')
		
		.end((err, res) => {
			res.should.have.status(200);
			expect(res.body.length).to.equal(parcel.length);
			res.body.should.be.a('array');
			done();
		});

	});

});
 
 //testing on creating new parcel endpoint
 describe('/POST newParcel', () => {
	it('It should create a new parcel', (done) => {
		const parcel_length = parcel.length;

		chai.request(app)
		.post('/api/v1/parcels/')
		.send({
			'name': 'Tupac',
			'phone': '0712345678',
			'quantity': 50,
			'country': 'DRC'
		})
		.end((err, res) => {
			res.should.have.status(200);
			expect(parcel_length + 1).to.equal(parcel.length);
			// res.body.should.be.a('string');
			done();
		});

	});

});
//testing for cancel the parcel 
describe('/PUT cancelParcel', () => {
	it('It should cancel an incomplete parcel', (done) => {
		

		chai.request(app)
		.put('/api/v1/parcels/0/cancel')
		
		.end((err, res) => {
			res.should.have.status(400);
			})

			done();
		});

	});

describe('/GET parcelDetail', () => {
	it('It should return detail of a parcel', (done) => {
		

		chai.request(app)
		.get('/api/v1/parcels/1/')
		
		.end((err, res) => {
			res.should.have.status(200);
			expect(res.body.length).to.equal(1);

			// check for parcel id 2
			chai.request(app)
			.get('/api/v1/parcels/3000')
			.end((err, res) =>{
				res.should.have.status(200);
				expect(res.body.length).to.equal(0);
			})

			done();
		});

	});

});

describe('/GET userParcels', () => {
	it('It should return parcels of a specific user', (done) => {
		

		chai.request(app)
		.get('/api/v1/users/0/parcels/')
		
		.end((err, res) => {
			res.should.have.status(200);
			expect(res.body.length).to.equal(0);

			// check for user id 200000
			chai.request(app)
			.get('/api/v1/users/200000/parcels/')
			.end((err, res) =>{
				res.should.have.status(200);
				expect(res.body.length).to.equal(0);
			})

			done();
		});

	});

});
