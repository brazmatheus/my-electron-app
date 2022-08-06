import {Client} from 'pg';

const client = new Client({
    database: 'pine',
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'teste123'
})

export default client;