var newController=function(func,duration,val){
	return new Promise(function(resolve,rej){
		func()
		setTimeout(function(){
			resolve(val)
			console.log('resolved');
		},duration)
	})
}

// var newCtrl=function(duration,res){
// 	setTimeout(function(){
// 		res(1)
// 		console.log('resolved');
// 	},duration)
// }
var t=Promise.resolve(0).then(function(val){
	val++
	console.log(val);
	return newController(function(){

	},3000,val)
	// return new Promise(function(resolve,rej){
	// 	newCtrl(1500,resolve)
	// })
})
.then(function(val){
	val++
	console.log(val);
	return newController(function(){
		
	},3000,val) //return  a controller func with delay and val
})
.then(function(val){
	val++
	console.log(val);
	setTimeout(function(){

		console.log('让我们hhh');
	},1000)
	return 'hhh'
})
.then(function(val){
	val+=' 我比你先笑'
	console.log(val)
})
//如果return的是promise 则.then(onfulfilled,onerror)
//如果return的val不是Promise, 则then(function(val))