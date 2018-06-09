const Agenda = require('agenda');

const mongoConnectionString = 'mongodb://127.0.0.1/agenda';
const agenda = new Agenda({db: {address: mongoConnectionString}});

agenda.define('example', function(job, done) {
  console.log(new Date(), 'Example job');
  done();
});

(async function() { // IIFE to give access to async/await
  await agenda.start();
  agenda.every('10 seconds', 'example');
})();
