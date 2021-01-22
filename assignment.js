function kilometerToMeter(kilometer){
    var meter=kilometer*1000;
    return meter;
}
var meter=kilometerToMeter(2)
console.log(meter);



function budgetCalculator( watch,phone,laptob){
    return(50*watch+100*phone+500*laptob)
}
var result=budgetCalculator(2,5,7);
console.log(result);



function hotelCost(num){
    if(num<=10){
      return 100*num
    } else if(num>10 & num<=20) {
      return 80*num
      
    } else{
      return (50*num+(80*10))
      
    }
  
  }
  var result=hotelCost(140);
  console.log(result);




var str=["jasim","ferdous","salmanshah"]
function megaFriend() {
    return str[2]
}
var result=megaFriend();
console.log(result); 