var answers = {};
var Text = require('prompt-text');
var Prompt = require('..');
var prompt = new Prompt({
  name: 'colors',
  message: 'What are your favorite colors?',
  choices: function() {
    console.log('should be second');
    return [
      {name: 'red', category: 'foo'},
      {name: 'blue', category: 'bar', disabled: true},
      {name: 'green', category: 'baz'},
      {name: 'yellow', category: 'fez'},
      {name: 'brown', category: 'qux'},
      {name: 'abc', category: 'abc'},
      {name: 'xyz', category: 'xyz'},
    ]
  }
});
console.log('should be first');
prompt.run(answers)
  .then(function(answer) {
    console.log(answer)
  })
  .catch(function(err) {
    console.log(err)
  })
