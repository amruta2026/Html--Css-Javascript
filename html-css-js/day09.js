a= "hello"
console.log(a)


function validate(name , age){         //function name 
    console.log("name=" +name+ ", age="+age)
}
validate("a" ,21)



// for(i=1; i<=5; i++){   //simple for

// console.log("simple for loop")
// }


fruits = ["apple","bannana","orange","pinapple","watermelon"]; //in used index


for(frt in fruits){

   let f = document.getElementById("idoffruit")  ////id pointout
    
    let l = document.createElement("li")
       
    l.textContent= fruits[frt];

    f.appendChild(l)
   // console.log(fruits[frt])
}

cities = ["mumbai" ,"pune" ,"nashik" ,"nagpur" ,"beed" ];    //off index direct variable ko point karta hai
for(var city of cities){      //ECMA feature
         
    console.log(city)
}

