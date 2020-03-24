import knex from 'knex';
import configKnex from '../../knexfile';

const connection = knex(configKnex.development);

export default connection;