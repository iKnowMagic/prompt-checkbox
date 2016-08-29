var Enquirer = require('enquirer');
var enquirer = new Enquirer();

enquirer.register('checkbox', require('./'));
enquirer.question('colors', 'What are your favorite colors?', {
  type: 'checkbox',
  choices: [
    'red',
    'blue',
    'yellow'
  ]
});

enquirer.ask('colors')
  .then(function(answers) {
    console.log(answers)
  })
