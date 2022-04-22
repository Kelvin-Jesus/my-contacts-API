const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'kj',
    password: '@Random_1234_Password@',
    database: 'mycontacts',
});

client.connect();

exports.query = async (queryItSelf, values) => {
    const { rows } = await client.query(queryItSelf, values);
    return rows;
};
