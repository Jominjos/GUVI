console.log("jhe");

alert(`I’m invoked!`);


alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`World`)
alert(3 +1+ 2); // this is multiple line code and its working


let admin=9, fname1=10.5; 
fname1 = "Guvi";
lname = "geek";
admin = fname1+lname;
alert( admin ); // "Guvi geek"

console.log(admin);


let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name1 = fname+lname;

alert( `hello ${name1}` );


let a1 = Number(prompt("First number?"));
let b = Number(prompt("Second number?"));
alert(a1 + b);



let a2 = false;
//Don't touch below this
if (a2) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}



let a = !prompt("Enter a number?");
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}


let value = Number(prompt('How many runs you scored in this ball'));
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}



let login = 'Employee';
let message1 = (login == 'Employee') ? 'Greetings':
 'No login' ;
console.log(message1);



// You cant change the value of the msg
let message2;
if (null || 2 || undefined )
{
 message2 = "welcome boss";
}
else
{
  message2 = "Go away";
}
  console.log(message2);

 

  let message3;
let lock1 = !2;
//Dont change any code below this 
if (null || lock1 || undefined )
{
  message3 = "Go away";
}
else
{
 message3 = "welcome";
}
  console.log(message3);

   

  let message;
let lock2 =! 2;
//Dont change any code below this
if (lock2 && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);


//You can change only 2 characters
let i = 4;
while (i>1) {
  console.log( --i );
}



let num = 10
for (let i=1;i<=num;i++){
    console.log(i);
}



for (let num = 2; num <= 20; num += 2) {
    console.log(num)
  }



  let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}

let countdown = 100;
while (countdown > 1) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}


  
let lemein = '0';
let lemeout = 0;
let msg = "";
if (lemein) {
 msg += `hi`;
 }
if (lemeout) {
 msg += `Hello`;
}
console.log(msg);


let numsArrq = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let new_stringq=[];
 
for (let i = 0; i < 10; i++) {
 new_stringq.push(numsArrq[i]); 
}
console.log(new_stringq);


let numsArrw = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let new_stringw=[];
 
for (let i = numsArrw.length; i >= 0; i--) {
 new_stringw.push(numsArrw[i]); 
}
console.log(new_stringw);





let numsArrt = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let new_stringt=[];
 
for (let i = (numsArrt.length)-1; i >= 0; i--) {
 if(numsArrt[i]%2==0)new_stringt.push("even")
 else new_stringt.push(numsArrt[i])
}
console.log(new_stringt);


let numsArrs = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let new_strings=[];
 
for (let i = (numsArrs.length)-1; i >= 0; i--) {
 if(numsArrs[i]%2==1)new_strings.push("odd")
 else new_strings.push(numsArrs[i])
}
console.log(new_strings);



var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;

let new_string=[];
 
for (let i = (numsArr.length)-1; i >= 0; i--) {
 console.log(numsArr[i]);
}

aa = (f,s,t) => {
    
    console.log(f,s,t);
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
   aa(1,5,3);

   

   (function(str){
    str1 = str.split("").reverse().join("");
    console.log(str1); 
   })("abcd")

   

