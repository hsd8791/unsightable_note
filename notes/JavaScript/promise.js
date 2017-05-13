Promise.resolve('foo')
  // 1. Receive "foo" concatenate "bar" to it and resolve that to the next then
  .then(function(string) {
    return new Promise(function(resolve, reject) {  //new then run immd
      console.log('string in 1st promise:',string);
      setTimeout(function() {
        string += 'bar';
        reject(string); //resolved pass string to then onfulfilled
      }, 1);

    });
  })
  // 2. receive "foobar", register a callback function to work on that string

  .then(function(string) { //fulfilled func


      console.log('string in 2nd promise:',string);
    setTimeout(function() {
      string += 'baz';
      console.log(string+' 2nd');
    }, 1)
    return string;

    // //if need to use resolve and reject instante a new Promise
    // return new Promise(function(res,rej){
    //   setTimeout(callback, after);
    // })
  },function(err){
    console.log('err:',err);
    reject(err)

  })
  .then(function(string) {
    console.log("Last Then:  oops... didn't bother to instantiate and return " +
                "a promise in the prior then so the sequence may be a bit " +
                "surprising");

    // Note that `string` will not have the 'baz' bit of it at this point. This
    // is because we mocked that to happen asynchronously with a setTimeout function
    console.log(string+' 3rd');
  })
  .then(function(val){
    console.log(val,'expected undefined');
  })