
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == ""){
		fName.classList.add('is-invalid')
		fName.classList.remove('invalid-feedback')
		errorName.style.display = "block"
		errorName.innerText
	} else{
		errorName.innerText = ""
	}

	if(fEmail.value == ""){
		error++;
	}

	if(fAddress.value == ""){
		error++;
	}

	if(fLastN.value == ""){
		error++;
	}	
	
	if(fPassword.value == ""){
		error++;
	}

	if(fPhone.value == ""){
		error++;
	}
	

}
