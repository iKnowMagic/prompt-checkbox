var Prompt = require('..');
var prompt = new Prompt({
  name: 'colors',
  message: 'What are your favorite colors?',
  radio: true,
  choices: [
    'red',
    'blue',
    'yellow',
    'magenta',
    'green',
    'cyan'
  ]
});

prompt.run()
  .then(function(answers) {
    console.log(arguments)
  })
  .catch(function(err) {
    console.log(err)
  })
