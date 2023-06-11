const str1 =["Ramnad","nantha gopal","jomin","joshua","legioon","madam"]
const numbers = [8, 19, 5, 6, 14, 9, 13,23,29,30,45,67,8,19,5,66];
const numbers1 = [18, 9, 15, 26,5, 4, 34,63,73,20,34,64,48,14,44,62];



// functions 
//IIFE
(function(){
    console.log("i am an iife function");
      })();
    
  //Arrow fuction
    let arrowfunc=()=>{
        console.log("i am an arrow fuction");
          };
    arrowfunc();      
    
    function normalFunc(){
        console.log("im a normal func");
    }
    normalFunc();
   // Annonymous function 
    let annonFunc = function(){
        console.log(`anonymous function`);  
    }
    annonFunc();


 //Odd numbers in an array
    (function(){
      const numbers = [8, 19, 5, 6, 14, 9, 13];
    const odds = [];
    for (const num of numbers) {
      if (num % 2 === 1) {
        odds.push(num);
      }
    }
    console.log(odds);
          })();
    
  //To uppercase
 

 let upp = str1.map(d=>(
  d[0].toUpperCase()+d.slice(1)
 ) )

 console.log(upp);

let sum=0;
let summ = numbers.map(d=>(
  sum=sum+d
 ))

 console.log(sum);


 // prime
 (function(){
  let Prime=[];
let Isprime= function(d){
  for(let i=2;i<d;i++){
    if(d%i==0) return false
    
  }
   return true
  
}
numbers.map(d=>{
  if (d<=1)console.log("enter valid number");
  else{
    if(Isprime(d)) Prime.push(d)
  }
})

  
console.log(Prime); })();


// Remove duplicates
(function(){
  uniq=[...new Set(numbers)]
  console.log(uniq); })();



// find Palindrome
let palindrome=[];
str1.map((d)=>{

  let revstr4 = ((d.split('')).reverse()).join("")
  if(d==revstr4) palindrome.push(d);
}
  

)
console.log(palindrome);

//Median
let Median=[];
for(let i=0;i<numbers.length; i++){
    Median.push(numbers[i]+numbers1[i])
}
console.log(Median);



//rotate array by k times
let k=7
var nanbar=[...numbers]
k=k%numbers.length;
for (let i=1;i<=k;i++){
  
  
  nanbar.unshift(nanbar.pop())
  
}

console.log(
  numbers
)
console.log(nanbar);
