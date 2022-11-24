const Pool = require("pg").Pool;

// using postgres user and pw as default
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "goalcatcher",            // For some reason this isn't taking an env variable
  password: "postgres",
  port: 5432,
  // user: process.env.DB_USER,
  // host: process.env.DB_HOST,
  // database: "goalcatcher",            // For some reason this isn't taking an env variable
  // password: process.env.DB_PASSWORD,
  // port: process.env.DB_PORT,
});

module.exports = pool;
