import { Pool } from "pg";

const PG_URI = "postgres://cdprgjus:7pnMQ_It1Z8zKf8zMlPa9z8TOf_Xsh2H@queenie.db.elephantsql.com/cdprgjus";

let conn;

if (!conn) {
    conn = new Pool({
      connectionString: PG_URI
      // user: process.env.PGSQL_USER,
      // password: process.env.PGSQL_PASSWORD,
      // host: process.env.PGSQL_HOST,
      // port: process.env.PGSQL_PORT,
      // database: process.env.PGSQL_DATABASE,
    });
}

export default conn;