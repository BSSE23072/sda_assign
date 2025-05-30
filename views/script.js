// Here is the validation for the email.
function notEmpty3(elem){
	if(elem.value.length == 0){
		document.getElementById('T-2').innerHTML='The Name field should not be empty!';
		elem.focus();
		return false;
	}
	return true;
}
//  Here is the validation for the password it will print the message not the alert 
// function isAlphanumeric(elem){
// 	var elementLegth=elem.value;
// 	if(elementLegth.length>0 && elementLegth.length>8){
// 		return true;
// 	}else{
// 		alert("Password must have atleast 8 characters.");
// 		elem.focus();
// 		return false;
// 	}
// }
function notEmpty(elem){
	if(elem.value.length == 0){
		document.getElementById('Name').innerHTML='The Name field should not be empty!';
		elem.focus();
		return false;
	}
	return true;
}


function emailValidator2(elem){
    var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
     if(elem.value.match(emailExp)){
     return true;
     }else{
      document.getElementById('Name').innerHTML='Please, Enter the valid Email Id.';
       elem.focus();
        return false;
    }
    }

	function notEmpty2(elem){
		if(elem.value.length == 0){
			document.getElementById('Name').innerHTML='The  User Name field should not be empty!';
			elem.focus();
			return false;
		}
		return true;
	}
	
	function isAlphanumeric_password(elem) {
		// Regular expression to allow only alphanumeric characters
		var alphaExp = /^[0-9a-zA-Z]+$/;
	
		// Check if password matches the regex for alphanumeric characters
		if (elem.value.match(alphaExp)) {
			return true;
		} else {
			// Alert with a corrected message
			alert("The password must contain only alphanumeric characters.");
			
			// Focus on the input element for correction
			elem.focus();
	
			// Return false indicating invalid password
			return false;
		}
	}
	

	function confirmPassword(elem1,elem2)
	{
		if(elem1.value==elem2.value)
		{
			return true;
		}
		else{

			document.getElementById('Name').innerHTML="The password and confirm password field does't match.";
			elem1.focus();
			elem2.focus();
			return false;
		}
	}

	function lengthRestriction(elem, min, max){
		var uInput = elem.value;
		if(uInput.length >= min && uInput.length >= max){
			return true;
		}else{
			document.getElementById('Name').innerHTML="The password must be of at leat 8 characters.";
			elem.focus();
			return false;
		}
	}

	$(document).ready(function() {
		$('#F-2').on('input', function() {
		  const email = $(this).val();
		  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		  if (!regex.test(email)) {
			$('#emailError').text("Invalid email format");
		  } else {
			$('#emailError').text("");
		  }
		});
	  });
	  
	  
	function notEmpty5(elem){
		if(elem.value.length == 0){
			document.getElementById('Name').innerHTML='The  Contact-I  field should not be empty!';
			elem.focus();
			return false;
		}
		return true;
	}
	
	function notEmpty6(elem){
		if(elem.value.length == 0){
			document.getElementById('Name').innerHTML='The  Address field should not be empty!';
			elem.focus();
			return false;
		}
		return true;
	}
	
	function notEmpty7(elem){
		if(elem.value.length == 0){
			document.getElementById('Name').innerHTML='The  email Address field should not be empty!';
			elem.focus();
			return false;
		}
		return true;
	}

	function notEmpty8(elem, message) {
		const errorMessageElement = document.getElementById('Name2'); 
	
		if (!elem.value.trim()) {
			errorMessageElement.innerHTML = message; // Displaying the error message
			elem.focus(); 
			return false; 
		}
	
		errorMessageElement.innerHTML = ''; // Clearing any previous error messages
		return true; // Returning true to indicate validation passed
	}
	
	function isNumeric(elem, helperMsg) {
		const numericExpression = /^[0-9]+$/;  
		const errorMessageElement = document.getElementById('Name');  
	
		
		if (elem.value.match(numericExpression)) {
			errorMessageElement.innerHTML = '';  
			return true;  
		} else {
			errorMessageElement.innerHTML = helperMsg;  
			elem.focus();  // Focus on the input field
			return false;  // Return false if it's not numeric
		}
	}
	
	document.getElementById('employeeForm').addEventListener('submit', function(event) {
		event.preventDefault();  // Prevent form submission and page reload
	
		// Get form values
		const fullName = document.getElementById('F-1').value;
		const gender = document.getElementById('gender').value;
		const dob = `${document.getElementById('month').value} ${document.getElementById('day').value}, ${document.getElementById('year').value}`;
		const contact1 = document.getElementById('F-2').value;
		const contact2 = document.getElementById('F-3').value;
		const email = document.getElementById('F-4').value;
		const address = document.getElementById('F-5').value;
		const jobTitle = document.getElementById('F-6').value;
		const department = document.getElementById('F-7').value;
		const manager = document.getElementById('F-8').value;
		const employeeType = document.getElementById('F-9').value;
		const hiringDate = `${document.getElementById('month').value} ${document.getElementById('day').value}, ${document.getElementById('year').value}`;
	
		// Create a new employee object
		const newEmployee = {
			fullName,
			gender,
			dob,
			contact1,
			contact2,
			email,
			address,
			jobTitle,
			department,
			manager,
			employeeType,
			hiringDate
		};
	
		// Get the existing employees from localStorage or initialize as an empty array
		let employees = JSON.parse(localStorage.getItem('employees')) || [];
	
		// Add the new employee to the array
		employees.push(newEmployee);
	
		// Save the updated employees array back to localStorage
		localStorage.setItem('employees', JSON.stringify(employees));
	
		// Clear the form fields after submission
		document.getElementById('employeeForm').reset();
	});
	



	// Retrieve employee data from localStorage
let employees = JSON.parse(localStorage.getItem('employees')) || [];

// Function to populate the table with employee data
function populateEmployeeTable() {
    const tableBody = document.getElementById('employeeTableBody');
    tableBody.innerHTML = '';  // Clear existing rows

    // If no employees, show a message
    if (employees.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="12" class="text-center">No employees available</td>`;
        tableBody.appendChild(row);
    } else {
        employees.forEach(employee => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${employee.fullName}</td>
                <td>${employee.gender}</td>
                <td>${employee.dob}</td>
                <td>${employee.contact1}</td>
                <td>${employee.contact2}</td>
                <td>${employee.email}</td>
                <td>${employee.address}</td>
                <td>${employee.jobTitle}</td>
                <td>${employee.department}</td>
                <td>${employee.manager}</td>
                <td>${employee.employeeType}</td>
                <td>${employee.hiringDate}</td>
            `;
            tableBody.appendChild(row);
        });
    }
}

// Call the function to populate the table when the page loads
window.onload = function() {
    populateEmployeeTable();
};
