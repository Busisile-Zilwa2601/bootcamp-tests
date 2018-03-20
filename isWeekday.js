function isWeekday(myDay){
  var answer = (!(myDay.startsWith('S')) &&(myDay.endsWith("day")));
  return answer;
}
