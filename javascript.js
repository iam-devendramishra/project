function validation(){
		
			var user = document.getElementById('user').value;

			if (user == ""){
				document.getElementById('username').innerHTML = "*PLEASE FILL THE FULL NAME FIELD*";
				return false;
			}

			if  ((user.length <= 2) || ( user.length > 20)){
				document.getElementById('username').innerHTML = "*PLEASE FILL THE FULL NAME between 2 to 20*";
				return false;
			}



			var phone = document.getElementById('phone').value;

			if (phone == ""){
				document.getElementById('phonenumber').innerHTML = "*PLEASE FILL THE phone number in this FIELD*";
				return false;
			}

			if ((phone.length < 5) || (phone.length >10 )){
				document.getElementById('phonenumber').innerHTML = "*PLEASE FILL THE correct phone number in this FIELD*";
				return false;
			}


			if (isNaN (phone)){
				document.getElementById('phonenumber').innerHTML = "*PLEASE FILL number in this FIELD*";
				return false;
			}

	
			var email = document.getElementById('email').value;


			if (email == ""){
				document.getElementById('emailid').innerHTML = "*PLEASE FILL THE email id in this FIELD*";
				return false;
			}

			if (email.indexOf('@') <= 0){
				document.getElementById('emailid').innerHTML = "*@ invalid position*";
				return false;
			}



			var subject = document.getElementById('subject').value;


			if (subject == ""){
				document.getElementById('related').innerHTML = "*PLEASE FILL product related message in this FIELD*";
				return false;
			}


		}	
