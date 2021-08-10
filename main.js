let calulateTimeInterval =(first,second,interval=10)=>{
  var diff = Math.abs(new Date(`2021/8/9 ${second}`) - new Date(`2021/8/9 ${first}`));
var minutes = Math.floor((diff/1000)/60);
let finalV=minutes/interval
function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}
if(isFloat(finalV)) return false;//it means interval is not  valid
return(finalV)
}

let onetime=document.getElementById("onetime")
let secondtime=document.getElementById("secondtime")
let btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
  //need initial time final time and interval
 // console.log(onetime.value.length>3) //check time is given
 //to get the interval
 //false if its invalid interval else get the value
  let intervalT = calulateTimeInterval(onetime.value,secondtime.value,5)
  console.log(intervalT)//give the time intervals
  
  
  //converts the time to 12hour format
  tConv24(onetime.value)
})
//convert time to am pm
function tConv24(time24) {
  var ts = time24;
  var H = +ts.substr(0, 2);
  var h = (H % 12) || 12;
  h = (h < 10) ? ("0" + h) : h; // leading 0 at the left for 1 digit hours
  var ampm = H < 12 ? " AM" : " PM";
  ts = h + ts.substr(2, 3) + ampm;
  return ts;
};