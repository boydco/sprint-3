/*Cube Function*/
function cube (X) {
  return x * x * x
}


/*Absolute Function*/
function absolute (x) {
  if ( x >= 0 ) {
    return x
  } else {
    return x * -1
  }
}



/* Add Y to each name index in an array */
function add(x) {
  return x + 'y'
    }

var names = ['dean', 'sam', 'tom', 'fish', 'cat']

var nameMap = names.map(add)

nameMap
[ 'deany', 'samy', 'tomy', 'fishy', 'caty' ]



/* KiaOra Name (function that calls a function) */
function makeKiaOra(name) {
  return function() {
    console.log('KiaOra, ' + name)
  }
}

/* Extra credit for Hard Core question */
function makeSince (d) {
  var now = new Date()
  return function() {
    var since = makeSince(new Date())
  }
 }
/*The one above is incorrect, I was having trouble just getting started with it*/
