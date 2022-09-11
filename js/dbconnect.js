const {Client, Pool} = require('pg')

const client = new Client({
    database: 'pine',
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'teste123'
})

const pool = new Pool({
    database: 'pine',
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'teste123'
})

exports.postgres = client;
exports.pool = pool;