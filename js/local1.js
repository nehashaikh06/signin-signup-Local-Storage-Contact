function signup(){
   var first_name= document.getElementById("first_name").value;
   var last_name= document.getElementById("last_name").value;
   var email= document.getElementById("email").value;
   var age= document.getElementById("age").value;
   var password= document.getElementById("password").value;

   //pass data to local storage (in web browser)
   
   localStorage.setItem("name1",first_name);
   localStorage.setItem("lastname1",last_name);
   localStorage.setItem("email1",email);
   localStorage.setItem("age1",age);
   localStorage.setItem("password1",password);


}