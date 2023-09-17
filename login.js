
document.getElementById('loginFORM').addEventListener('submit', function (event) {
    var inputEmail = document.getElementById('lemail').value;
    var inputPassword = document.getElementById('lpassword').value;
  
    const data = localStorage.getItem('data');
    var user = JSON.parse(data);

    var errorField=document.getElementsByClassName('spn');
    errorField[0].innerHTML="";
    errorField[1].innerHTML="";

    flag = false;
    
    if(user!=null){

        for (let i = 0; i < user.length; i++) {

            if(inputEmail==user[i].email){
                if(inputPassword==user[i].password)
                {
                    alert('you logged in successfully');
                    localStorage.setItem('name', user[i].name);
                    localStorage.setItem('email', user[i].email);
                    localStorage.setItem('phone', user[i].contact);
                flag = true;
                break;
              }
                else {
                errorField[1].append("incorrect password");
                    event.preventDefault();
                    flag=true;
                }
            }

            if(inputPassword==user[i].password){
                errorField[0].append("incorrect email");
                event.preventDefault();
                flag=true;
            }
        
    
        }
            
    }


    if (flag == false) {
        alert("ACCESS DENIED :wrong credentials user not exist");
        event.preventDefault();
        document.getElementById('loginFORM').reset();
    }

});




