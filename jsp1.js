let username = document.getElementById("un");
    let email = document.getElementById("em");
    let password = document.getElementById("pw");
    let password2 = document.getElementById("cpw");
    let password_pattern = '';

    let usernameerreur=document.getElementById("erreurusername");

    username.addEventListener("input",function checkusername(){

let usern=username.value.trim();
if(usern.length<3  || usern.length>25){
    document.getElementById("erreuru").innerHTML='username is not valide';
}
else 
document.getElementById("erreuru").innerHTML="";
});

    email.addEventListener("input",function checkemail(){
       let usere=email.value;

       if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(usere))
  {
    document.getElementById("erreure").innerHTML='email is not valide';
    return (true)
  }
        else 
        document.getElementById("erreure").innerHTML="";
        });

    password.addEventListener("input",function checkpassword1(){
            let userp=password.value;
     
            if (!(/^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/).test(userp)|| password.length<8 )
       {
         document.getElementById("erreurp").innerHTML='password is not valide';
         return (true)
       }
             else{
             document.getElementById("erreurp").innerHTML="";
            }
             });

    password2.addEventListener("input",function checkpassword2(){
        let usercp=password2.value;
         
                if (!(/^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/).test(usercp) || password2.value == password.value)
           {
             document.getElementById("erreurp2").innerHTML='password confirmation is not valide';
             password.style.Color="red";
             return (true)
           }
                 else {
                 document.getElementById("erreurp2").innerHTML="";
                }
                 });

    

                 

                 function checkbutton()
                 {
                    if(checkusername() && checkemail() && checkpassword1() && checkpassword2())
                    window.location.replace('home.html');
                 }
                 document.getElementById("submit").addEventListener("click",checkbutton());