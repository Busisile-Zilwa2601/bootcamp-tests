var date = new Date();
function yearsAgo(myYear){
   //console.log(typeof(myYear));
  	var theYear = (date.getFullYear());
  	return (theYear-myYear);
}
document.write(yearsAgo(1989));
document.write(yearsAgo("2005"));
