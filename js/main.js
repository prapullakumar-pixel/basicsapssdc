var a = document.getElementById("para").innerHTML="appsdc traning";
document.write(a);

//sytnax for object
var details ={
	name:"apssdc",
	age:5,
	courses:["webdesigning","phython","data analysis"]

}

//for loop syntax
for (var i=0; i < details.courses.legnth; i++) {
	document.write(details.courses[i]+"<br>")
}

//for in syntax
for (var i in details.courses) {
	document.write(details.courses[i]+"<br>")
}

 //we need to use for of only for strings,arrays and not for objects
 //for of syntax
for (var i of details.courses){
	document.write(i+"<br>")
}
var name ="appsdc ReactJs"
for (var i of name){
	 document.write(i);
}


var b=21
if (b<=21){
	document.write("<br>"+"success")
}

else if(b==25){
document.write("your age is" +b)
}

else{
	document.write("fail")
}




