
// exit user
const USER_NAME = "user";
// pattern to validate password
const regex = new RegExp("((?=.*[A-Za-z])(?=.*[0-9])(?=.{9,})(?=.*[!@#\$%\^&\*]))");

function validateForm () {

	// get userName and password
	var userName = document.forms["myForm"]["userName"].value;
	var password = document.forms["myForm"]["psw"].value;
	
	// refesh message alert
	document.getElementById("alertUserName").innerHTML = "";
	document.getElementById("alertPassword").innerHTML = "";

	// check user name null
	if (userName == ""){
		document.getElementById("alertUserName").innerHTML = "Hãy nhập UserName";
		return false;
	} 

	// check user exit or not
	if (checkExitUser(userName)){

		document.getElementById("alertUserName").innerHTML = "UserName đã được sử dụng";
		return false;
	}

	// check password
	if(!checkPassword(password, regex)){

			document.getElementById("alertPassword").innerHTML = "Mật khẩu phải có ít nhất 9 ký tự có bao gồm chữ, số và ký tự đặc biệt";

			return false;
	}

	alert("Đăng ký thành công");
	return true;


}


function checkExitUser (userName) {

	if(userName == USER_NAME){
		return true;
	} else {
		return false;
	}
}


function checkPassword (password, regex) {

	if(regex.test(password)){
		return true;
	} else {
		return false;
	}
}

