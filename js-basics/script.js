

function validateForm (){
    let valid = true;

    //clear messages
    document.getElementById('nameError').innerHTML=''
    document.getElementById('emailError').innerHTML=''
    document.getElementById('passwordError').innerHTML=''
    document.getElementById('ageError').innerHTML=''
    document.getElementById('nationError').innerHTML=''
    document.getElementById('termsError').innerHTML=''
    document.getElementById('genderError').innerHTML=''

    //validate name
    let name = document.getElementById('name').value;
    if(name === ""){
        document.getElementById('nameError').innerHTML='this field can not be empty';
        valid = false;    
    }

    //validate email
    let email = document.getElementById('email').value;
    if (email === ""){
        document.getElementById('emailError').innerHTML='this field can not be empty';
        valid = false;
    }

    //validate password
    let password = document.getElementById('password').value;
    if (password === "") {
        document.getElementById('passwordError').innerHTML='this field can not be empty';
        valid = false;
    }
    
    else if (password.length < 8){
        document.getElementById('passwordError').innerHTML='password must be at least 8 characters!';
    }
    valid= false;

    //validate age
    let age = document.getElementById('age').value;
    if (age === "") {
        document.getElementById('ageError').innerHTML="this field can not be empty!"
        valid = false;
    }   
    
    else if (isNaN(age)|| age < 18){
        document.getElementById('ageError').innerHTML='Age must be above 18!';
        valid = false;
    }

    // nationality validation
   let nation = document.getElementById('nation').value;
    if (nation === ""){
        document.getElementById('nationError').innerHTML='Please select your country of residence';
        valid = false;
    }

    // gender validation
    let gender = docoment.getElementById('gender_1 || gender_2 ').value;
    if (gender === "") {
        document.getElementById('genderError').innerHTML='Please select your gender'
        valid= false;
    }

    //  Terms valodation
    let terms = document.getElementById('terms').value;
    if (terms === "") {
        document.getElementById('termsError').innerHTML = 'please tick the checkbox above'
        valid = false;
    }

    return valid
    }

