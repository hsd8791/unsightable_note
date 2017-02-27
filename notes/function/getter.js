var obj = {
  log: ['test'],

  get latest() {
    if (this.log.length == 0) return undefined;
    return this.log[this.log.length - 1];
  }

}
console.log(obj.latest); // Will return "test".



var o = {a: 0};

Object.defineProperty(o, 'b', { get: function() { return this.a + 1; } });

console.log(o.b) // Runs the getter, which yields a + 1 (which is 1)


var language = {
  set current(name) {
    this.log.push(name);
  },
  log: []
}

language.current = 'EN';
console.log(language.log); // ['EN']

language.current = 'FA';
console.log(language.log); // ['EN', 'FA']

var expr = 'foo';

var obj = {
  baz: 'bar',
  set [expr](v) { this.baz = v; }
};

console.log(obj.baz); // "bar"
obj.foo = 'baz';      // run the setter
console.log(obj.baz); // "baz"