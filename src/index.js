module.exports = function getZerosCount(number, base) {
  var i = 2;
	var factors = [];
	while (base > 0 && i <= base) {
		while (base % i == 0) {
			factors.push(i);
			base = base / i;
		}
		i++;
	}
  factors.sort((a,b)=>{return a-b})
  let counter=0;
  while (number>0){
  number=Math.floor(number/factors[factors.length-1])
  counter+=number
}
return counter
}