function validateform(){
	var fname = document.getElementById("FName").value;
	var lname = document.getElementById("LName").value;
	var uname = document.getElementById("UName").value;
	var add1 = document.getElementById("address").value;
	var zip = document.getElementById("zip").value;
	var rbtn1 = document.getElementById("radiobtn1").value;
	var rbtn2 = document.getElementById("radiobtn2").value;
	var rbtn3 = document.getElementById("radiobtn3").value;
	var noc = document.getElementById("cardholder").value;
	var ccn = document.getElementById("cardnumber").value;
	var expiry = document.getElementById("expirydate").value;
	var cvv = document.getElementById("cvvnumber").value;


	if(fname.length == 0 ){
	document.getElementById("msgF").innerHTML = "Valid first name required";
}else if(lname.length == 0){
	document.getElementById("msgL").innerHTML = "Valid last name required"
}else if(uname.length == 0){
	document.getElementById("msgU").innerHTML = "Valid username required"
}else if(add1.length == 0){
	document.getElementById("msgA1").innerHTML = "Valid address required"
}
else if(isNaN(zip)|| zip.length == 0|| zip.length !=5){
	document.getElementById("msgZ").innerHTML = "Valid zip code required"
}
else if((rbtn1 == false)&&(rbtn2 == false)&&(rbtn3 == false)){
	document.getElementById("msgR").innerHTML = "Please select one option"
}else if(noc.length == 0){
	document.getElementById("msgNC").innerHTML = "Valid name required"
}
else if(isNAN(ccn)|| ccn.length == 0 || ccn.length<0 || ccn.length>19){
	document.getElementById("msgCCN").innerHTML = "Valid credit card number required"
}
else if(expiry.length == 0){
	document.getElementById("msgEx").innerHTML = "Valid expiry date required"
}
else if(isNaN(cvv)|| cvv.length == 0 || cvv.length >4){
	document.getElementById("msgCVV").innerHTML = "Valid cvv number required"
}

}