a=45
console.log(a)
function validateemail(){
    let e=document.getElementById('email').value ;
    var emailRegex=/\S+@\S+\.\S+/.test(e);

    if(!emailRegex){
        document.getElementById('msg').innerHTML="wrong email"        
    }else{
        document.getElementById('msg').innerHTML="login successfull"
    }
}
    function change(){
       // document.getElementById('head').innerHTML="learning dom"
        let h= document.getElementById('head')
        if(h.innerText=="Day 15 Html-Css-Javascript"){
            h.innerText=h.innerText="Learning Dom"
        }else{
            h.innerText=h.innerText="Day 15 Html-Css-Javascript"
        }
    
    
    }

