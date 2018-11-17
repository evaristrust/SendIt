import parcel from '../src/api/models/parcel';

var chai = require('chai')
var expect = chai.expect;
var should = chai.should();
var chaiHttp = require("chai-http");
var app = require('../src/app');

chai.use(chaiHttp);
