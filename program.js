// EXERCISE 2 - TEMPLATE STRINGS
// -----------------------------
var input = process.argv[2];

console.log(`Hello, ${input}!
Your name lowercased is "${input.toLowerCase()}".`)


// EXERCISE 3 - ARROW FUNCTIONS, PART 1
// ------------------------------------
var inputs = process.argv.slice(2);
var result = inputs.map(x => x[0])
                   .reduce((x, y) => x + y);

console.log(`[${inputs}] becomes "${result}"`);


// EXERCISE 4 - ARROW FUNCTIONS AND THIS
// -------------------------------------
var foot = {
  kick: function() {
    this.yelp = "Ouch!";
    setImmediate(() => console.log(this.yelp));
  }
};

foot.kick();


// EXERCISE 5 - SPREAD
// -------------------
var numbers = process.argv.slice(2);
var min = Math.min(...numbers);

console.log(`The minimum of [${numbers}] is ${min}`);


// EXERCISE 6 - REST
// -----------------
module.exports = (...args) => {
  var total = 0;
  var length = args.length;
  args.forEach(value => total += value);

  return (total / length);
};


// EXERCISE 7 - DEFAULT ARGUMENTS, PART 1
// --------------------------------------
module.exports = (lower = 0, upper = 1) => (lower + upper) / 2;


// EXERCISE 8 - DEFAULT ARGUMENTS, PART 2
// --------------------------------------
module.exports = function makeImportant(arg, important = arg.length) {
  var howImportant = ('!').repeat(important);
  var sentence = arg + howImportant;

  return sentence;
};


// EXERCISE 9 - TAGGED TEMPLATE STRINGS
// ------------------------------------
console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(pieces, ...subs) {
  var result = pieces[0];
  for (var i = 0; i < subs.length; i++) {
    result += escape(subs[i]) + pieces[i + 1];
  }

  return result;
}

function escape(s) {
    return s.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&apos;")
            .replace(/"/g, "&quot;");
}
