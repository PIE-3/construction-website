function readMore(){
    var check=document.getElementById("readMore");
    var btnText=document.getElementById("readMoreBtn");
    if(check.style.display === "none"){
        check.style.display = "inline";
        btnText.innerHTML="Read Less";
    }
    else{
        check.style.display = "none";
        btnText.innerHTML="Read More";
    }
}

function signIn(){
    alert("Successfully Loged In!!!");
}