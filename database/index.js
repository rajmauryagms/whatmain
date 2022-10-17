const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '207.174.215.153',
      user : 'geniu9or_waroot',
      password : '5i?#X~l(Dbg;',
      database : 'geniu9or_waapii'
    }
  });

module.exports = knex;