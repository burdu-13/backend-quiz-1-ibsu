/* task 1)
a defined? false
b defined? true
*/

/*
task 2)
outer func:  this.foo = bar
outer func:  self.foo = bar
inner func:  this.foo = undefined
inner func:  self.foo = bar
*/

/*
task 3 )

const isPalindrome = s => s === s.split('').reverse().join('');
console.log(isPalindrome("zaza"));
*/



/*
task 4)
function sum(a, b) {
  if (b !== undefined) {
    return a + b;
  }
  return function(c) {
    return a + c;
  };
}
*/


/*
task5)
in the console 5 gets written (because of the for loop)

for (var i = 0; i < 5; i++) {
  (function(index) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + index));
    btn.addEventListener('click', function(){ console.log(index); });
    document.body.appendChild(btn);
  })(i);
}
*/


/*
