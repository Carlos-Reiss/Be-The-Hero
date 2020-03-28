import knex from 'knex';
import configKnex from '../../knexfile';

const config = process.env.NODE_ENV === 'test' ? configKnex.test : configKnex.development

const connection = knex(config);

export default connection;