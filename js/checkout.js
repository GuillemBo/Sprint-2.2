
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

	
	// Validate fields entered by the user: name, phone, password, and email

	let lettersOnly = /^[A-Za-z]+$/;
	let numbersOnly = /^\d+$/;
	let alphanumeric = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;
	let emailFormat = /^\S+@\S+\.\S+$/;

	if(fName.value.trim().length < 3 || !lettersOnly.test(fName.value.trim())){
		fName.classList.add('is-invalid');
		error++;
	} else{
		fName.classList.remove('is-invalid')
	}

	if(fEmail.value.length < 3 || !emailFormat.test(fEmail.value.trim())){
		fEmail.classList.add('is-invalid');
		error++;
	} else {
		fEmail.classList.remove('is-invalid')
	}

	if(fAddress.value.trim().length < 3){
		fAddress.classList.add('is-invalid');
		error++;
	} else {
		fAddress.classList.remove('is-invalid')
	}

	if(fLastN.value.trim().length < 3 || !lettersOnly.test(fLastN.value.trim())){
		fLastN.classList.add('is-invalid');
		error++;
	} else {
		fLastN.classList.remove('is-invalid')
	}
	
	if(fPassword.value.trim().length < 3 || !alphanumeric.test(fPassword.value.trim())){
		fPassword.classList.add('is-invalid');
		error++;
	} else {
		fPassword.classList.remove('is-invalid')
	}

	if((fPhone.value.trim().length < 9 || fPhone.value.trim().length > 9) || !numbersOnly.test(fPhone.value.trim())){
		fPhone.classList.add('is-invalid');
		error++;
	} else {
		fPhone.classList.remove('is-invalid')
	}
	

	if (error > 0) {
        
		return false;
    }

    return true;
}

