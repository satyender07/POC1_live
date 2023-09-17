
document.getElementById('signUp').addEventListener('submit', function (event) {
    

    if (validateForm()) {

        var Name = document.getElementById('iname').value;
        var Email = document.getElementById('iemail').value;
        var Contact = document.getElementById('icontact').value;
        var Username = document.getElementById('iusername').value;
        var Password = document.getElementById('ipassword').value;

        let Data = localStorage.getItem('data');
        ArrOfObjects = Data ? JSON.parse(Data) : [];

        if(ArrOfObjects.some((v)=>{
              return v.email==Email;
        })){
            alert('This email is already used');
            document.getElementById('iemail').focus();
            event.preventDefault();
        }
        else{
            let user = { name: Name, email: Email, contact: Contact, username: Username, password: Password };
            ArrOfObjects.push(user);
            localStorage.setItem('data', JSON.stringify(ArrOfObjects));
             alert('Account created successfully!');
        }

    }

    else event.preventDefault();


});

function validateForm() {
    var name = document.getElementById('iname').value;
    var email = document.getElementById('iemail').value;
    var contact = document.getElementById('icontact').value;
    var username = document.getElementById('iusername').value;
    var password = document.getElementById('ipassword').value;


    var errorField=document.getElementsByClassName('span');

    errorField[0].innerHTML="";
    document.getElementById('iname').classList.remove('span-set');

    errorField[1].innerHTML="";
    document.getElementById('iemail').classList.remove('span-set');
    
    errorField[2].innerHTML="";
    document.getElementById('icontact').classList.remove('span-set');

    errorField[3].innerHTML="";
    document.getElementById('iusername').classList.remove('span-set');

    errorField[4].innerHTML="";
    document.getElementById('ipassword').classList.remove('span-set');


    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    // Javascript reGex for Phone Number validation.
    var regPhone = /^\d{10}$/;
    // Javascript reGex for Name validation
    var regName = /\d+$/g;

    if (name == "" || regName.test(name)) {
        document.getElementById('iname').classList.add('span-set');
        errorField[0].append('please enter your name');
        document.getElementById('iname').focus();
        return false;
    }

    if (email == "" || !regEmail.test(email)) {
        document.getElementById('iemail').classList.add('span-set');
        errorField[1].append("Please enter a valid e-mail address.");
        document.getElementById('iemail').focus();
        return false;
    }

    if (contact == "" || !regPhone.test(contact)) {
        document.getElementById('icontact').classList.add('span-set');
        errorField[2].append("Please enter valid phone number.");
        document.getElementById('icontact').focus();
        return false;
    }

    if (username == "") {
        document.getElementById('iusername').classList.add('span-set');
        errorField[3].append("please enter username");
        document.getElementById('iusername').focus();
        return false;
    }

    if (password == "") {
        document.getElementById('ipassword').classList.add('span-set');
        errorField[4].append("Please enter your password");
        document.getElementById('ipassword').focus();
        return false;
    }

    if (password.length < 6) {
        document.getElementById('ipassword').classList.add('span-set');
        errorField[4].append("Password should be atleast 6 character long");
        document.getElementById('ipassword').focus();
        return false;
    }


    return true;

}