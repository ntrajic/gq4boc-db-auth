const userSchema = require('./user');
const tripSchema = require('./trip');

const defaultSchema = require('./default');

module.exports = [defaultSchema, userSchema, tripSchema];