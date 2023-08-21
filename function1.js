console.log("This another method of adding script to DOM");  
//   creating function in js ( c++ wala function hi hai)
                                   // default value
 function greet(name, greettext="Greetings from javascript"){
    let name1 = "name1"; // scope of variable inside{ }
    console.log(name +" is a good boy");
    console.log(greettext +" "+  name);
 }
//  return fuction
 function sum( a,b,c){
    let d=a+b+c;
    return d;
    // dont write code after return
 }
//   defining argument
 let name1="abhi";
 let name2= "shubham";
 let name3= "rohan";
 let name4= "sagar";
 let greettext= "goodmorning";
// calling greet function with name as argument
 greet(name1, greettext);
 greet(name2, greettext);
 greet(name3, greettext);
 greet(name4, greettext);
 let returnval= sum(2,3,4);
   console.log(returnval);
