let calulateTimeInterval =(first,second,interval=10)=>{
  var diff = Math.abs(new Date(`2021/8/9 ${second}`) - new Date(`2021/8/9 ${first}`));
var minutes = Math.floor((diff/1000)/60);
console.log(minutes/interval)
}

let onetime=document.getElementById("onetime")
let secondtime=document.getElementById("secondtime")
let btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
  console.log(onetime.value.length>3) //check time is given
  calulateTimeInterval(onetime.value,secondtime.value) //give the time intervals
  
  
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
const convertFrom24To12Format = (time24) => {
  const [sHours, minutes] = time24.match(/([0-9]{1,2}):([0-9]{2})/).slice(1);
  const period = +sHours < 12 ? 'AM' : 'PM';
  const hours = +sHours % 12 || 12;

  return `${hours}:${minutes} ${period}`;
}