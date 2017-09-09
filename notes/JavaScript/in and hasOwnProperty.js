// in search instance and proto
// hasOwnProperty only search instance

var book = {
	name: 'game of throne',
	author: 'Gorge R.R Martin',
	author1: 'Gorge R.R Martin',
	author2: 'Gorge R.R Martin',
	author3: 'Gorge R.R Martin',
	author4: 'Gorge R.R Martin',
	author5: 'Gorge R.R Martin',
	author6: 'Gorge R.R Martin',
}
var i
console.time('1')
for (i = 0; i < 10000; i++) {
	book.hasOwnProperty('author3')
}
console.timeEnd('1')
console.time('2')
for (i = 0; i < 10000; i++) {
	'author3' in book
}
console.timeEnd('2')

var nums = []
console.time('3')

for (i = 0; i < 100; i++) {
	nums[i] = i
}

for (var i = 0; i < 10000; i++) {
	nums.hasOwnProperty(1)
}

console.timeEnd('3')
console.time('4')

for (var i = 0; i < 10000; i++) {
	1 in nums
}
console.timeEnd('4')