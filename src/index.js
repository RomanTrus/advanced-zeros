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
  var factorPows=[];
  factors.map((x,index)=>{
  	if(factors[index-1]!=x||index==0){
  		factorPows.push([x,1])
  	}else {factorPows[factorPows.length-1][1]++}
  })
 let answs=[];
 factorPows.map((x)=>{
 	var num=number;
 	var counter=0;
 	while(num>0){
 		num=Math.floor(num/x[0])
 		counter+=num;
 	}
 	answs.push(Math.floor(counter/x[1]))
 })
 return Math.min(...answs)
 
}
