import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  'postgres://jnvwwwkz:QFeXEP2qNAt5knTOmkYUB2-ZobXxdzWF@ruby.db.elephantsql.com/jnvwwwkz',
  {
    dialect: 'postgres',
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
