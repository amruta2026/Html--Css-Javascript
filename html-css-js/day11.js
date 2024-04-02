
//alert("i am in alert box")    

//a= confirm("do you want to continue ")      true or false value
//console.log(a)

//if(a==true){

 //   window.location.href="login.html"
//}else{

  //  document.getElementById("msg").innerText="you cancelled to continue"
//}

//document.getElementById("msg").innerText=p;
 //console.log(p)
//day = " monday ";
day = prompt("enter day:")
switch(day.toLowerCase()){
    case  "monday" :

    console.log("weak start")
    document.getElementById("msg").innerText="  monday weak start "    //dynamic banana // server ke side se action perform karnaaa
         break; 
    case "tuesday" : 
        console.log("tuesday: its a 2nd day off weak ")
        document.getElementById("msg").innerText=" tuesday: its a 2nd day off weak"
        break;  
        case "wednesday" :
            console.log("wednesday : its a 3rd day off weak ")
            document.getElementById("msg").innerText=" wednesday : its a 3rd day off weak"
        break;
            case "thursday" :
            console.log("thursday  : its a 4rd day off weak ")

            document.getElementById("msg").innerText="thursday  : its a 4rd day off weak "
        break;
            case "friday" :
            console.log("friday : weekend stated ")
            document.getElementById("msg").innerText="friday : weekend stated "
        break;
            case "saturday" :
            console.log("saturday : its a 2nd  day off weekend ")
            document.getElementById("msg").innerText="saturday : its a 2nd  day off weekend "
        break;
            case "sunday" :
            console.log("sunday : holiday ")
            document.getElementById("msg").innerText=" its sunday ....holiday"
        break;
            default :
            console.log("enter valid day")
            document.getElementById("msg").innerText="please enter valid day "
        break;

}
// for (i=0; i< 5; i++){
//     if (i==2){
//        // continue;
//        break;
//     }else{
//     console.log(i)
// }
// }


