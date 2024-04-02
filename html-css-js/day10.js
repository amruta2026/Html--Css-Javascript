
function validate(){

    u= document.getElementById("user").value

    p= document.getElementById("pass").value
    if ( u =="jbk"  && p =="123"){

        window.location.href = "login.html"   //all window=  browser function

}else{ 
    document.querySelector(".errormessege").innerText="Invalied username or password"               
 }
}