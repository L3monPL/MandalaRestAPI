const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: String(process.env.DB_USER),
  host: String(process.env.DB_HOST),
  database: String(process.env.DB),
  password: String(process.env.DB_PASSWORD),
  port: process.env.DB_PORT,
});

module.exports = pool;