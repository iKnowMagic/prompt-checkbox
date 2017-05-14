var Question = require('prompt-question');
var Prompt = require('..');
var question = new Question('colors', 'What are your favorite colors?', {
  type: 'checkbox',
  pointer: '♥♥♥',
  choices: [
    'red',
    'blue',
    'yellow'
  ]
});

var prompt = new Prompt(question);
prompt.run()
  .then(function(answers) {
    console.log(arguments)
  })
  .catch(function(err) {
    console.log(err)
  })