function validate(){
    let name=document.getElementById('name').value;
    let email=document.getElementById("email").value;
    let title=document.getElementById("title").value;
    let message=document.getElementById("message").value;
    let errorMessage=document.getElementById("errorMessage");
    let write;
    errorMessage.style.padding="10px";
    if(name.length < 4)
    {
       write="Please enter a valid name";
       errorMessage.innerHTML=write;
       return false;
    }
    if(email.indexof("@")==-1|| email.length < 5)
    {
        write="Please enter a valid email";
       errorMessage.innerHTML=write;
       return false;
    }
    if(title.length < 1)
    {
        write="Please enter a valid title";
       errorMessage.innerHTML=write;
       return false;
    }

    if(message.length < 20)
    {
        write="Please enter more than 20 characters";
       errorMessage.innerHTML=write;
       return false;
    }
    alert("Thank you for contacting us.");
    return true;
}