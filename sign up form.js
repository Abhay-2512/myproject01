function validate(){
var fname=document.getElementById("fname");
var lname=document.getElementById("lname");
var email=document.getElementById("email");
var pwd=document.getElementById("pwd");

// alert("hello");

if(fname.value ==""){
    // alert("hi");
    document.getElementById("fnameerr").style.display="block";
    document.getElementById("fnameerr1").style.display="block";
    
    return false;
}else{
    document.getElementById("fnameerr").style.display="none";
    document.getElementById("fnameerr1").style.display="none";
    
}
if(lname.value ==""){
    // alert("hi");
    document.getElementById("lnameerr").style.display="block";
    document.getElementById("lnameerr1").style.display="block";
    
    return false;
}else{
    document.getElementById("lnameerr").style.display="none";
    document.getElementById("lnameerr1").style.display="none";
    
}
if(email.value ==""){
    // alert("hi");
    document.getElementById("emailerr").style.display="block";
    document.getElementById("emailerr1").style.display="block";
    
    return false;
}else{
    document.getElementById("emailerr").style.display="none";
    document.getElementById("emailerr1").style.display="none";
    
}
if(pwd.value ==""){
    // alert("hi");
    document.getElementById("pwderr").style.display="block";
    document.getElementById("pwderr1").style.display="block";
    
    return false;
}else{
    document.getElementById("pwderr").style.display="none";
    document.getElementById("pwderr1").style.display="none";
    
}

window.location.reload();

}