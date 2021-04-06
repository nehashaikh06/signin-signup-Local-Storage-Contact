function login(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
   
    //get data from local storge (from web browser)

    var email1=localStorage.getItem("email1");
    var password1=localStorage.getItem("password1");

    if(email==email1 && password==password1)
    {
    
      window.open('home.html');
      return false;
        
        
        
    }
        else
        {
            alert("Email and Password is Incorrect!")
        }
    

}
