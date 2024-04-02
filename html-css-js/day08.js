var a=10;
let b ="hello js"
b= 12445
let c = 'c value'
let d= 34532
let e = true
let f = 34.434



console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)


console.log(typeof c)
console.log (typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)

let g = 26;
let h = "26";

console.log(g==h)     //To check only values true 
console.log(g===h)    //To strictly check the false values with respect to datatype


function validate(name) { //create function

    if (name= 'java by kiran'){      //add function
        console.log("welcome to the kiran academy")
    }
    else {
        console.log("not eligiable")
    }

}
validate('java by kiran')


let x = "Javascript"

function pointgvar(){


    let x ="Typescript"
    console.log(x)
 
   // console.log(this.x)
   console.log(window.x)
}
pointgvar.call({x})



pointgvar()
abc= "java"
xyz="java   "
console.log(abc === xyz)   //false
