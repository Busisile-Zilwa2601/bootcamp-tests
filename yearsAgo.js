var date = new Date();
function yearsAgo(myYear){
   //console.log(typeof(myYear));
  	var theYear = (date.getFullYear());
  	return (theYear-myYear);
}
console.log(yearsAgo(1989));
console.log(yearsAgo("2005"));
