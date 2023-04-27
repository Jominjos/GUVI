//for loop
let json = [{
    "id" : "1", 
    "msg"   : "hi",
    "tid" : "2013-05-05 23:35",
    "fromWho": "hello1@email.se"
},
{
    "id" : "2", 
    "msg"   : "there",
    "tid" : "2013-05-05 23:45",
    "fromWho": "hello2@email.se"
}];

for(let i = 0; i < json.length; i++) {
    let obj = json[i];

    console.log(obj.id);
}

//for in
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(property);
}
// for each
const obj = {
    name: 'Jomin',
    rank: 'Captain'
  };
  
 
  Object.keys(obj).forEach(key => {
    console.log(key, obj[key]);
  });


//My resume data
let resume = [{
    "name" : "jomin", 
    "age"   : "23",
    "phone number" : "9442843963",
    "ug": "Mechanical engineer",
    "experience":"1 year",
    "previous employer":"tekion"
}];

console.log(resume[0]["previous employer"]);