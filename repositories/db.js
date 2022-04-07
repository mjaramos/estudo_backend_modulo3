import pg from 'pg';

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }

  const pool = new pg.Pool({
    connectionString:
      'postgres://jnvwwwkz:QFeXEP2qNAt5knTOmkYUB2-ZobXxdzWF@ruby.db.elephantsql.com/jnvwwwkz',
  });

  global.connection = pool;

  return pool.connect();
}

export { connect };
