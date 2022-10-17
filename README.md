# Multiwa

Aplikasi Whats Up,Express,Mysql

const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '',
      user : '',
      password : '',
      database : ''
    }
  });

module.exports = knex;