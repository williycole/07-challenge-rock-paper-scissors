var sendNameHere = document.querySelector('#setName');
function WriteCookie() {


	cookievalue = escape(document.myform.customer.value) + ";";
	document.cookie = "name=" + cookievalue;
	// document.write("Setting Cookies : " + "name=" + cookievalue);
	sendNameHere.textContent = cookievalue;
}

