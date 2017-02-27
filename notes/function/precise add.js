function add(num1, num2){
  let r1, r2, m;
  r1 = (''+num1).split('.')[1].length;
  r2 = (''+num2).split('.')[1].length;
  console.log(r1,r2);
  m = Math.pow(10,Math.max(r1,r2));
  return (num1 * m + num2 * m) / m;
}
console.log(add(0.1,0.2));   //0.3
console.log(add(0.15,0.2256)); //0.3756