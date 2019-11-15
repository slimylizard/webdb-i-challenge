const db = require('../data/dbConfig.js');

module.exports = {
    get
};

function get() {
    return db('accounts')
}

function getByID() {
    return db('accounts').where({})
}