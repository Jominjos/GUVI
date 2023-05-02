var json1 = '{"name": "Person1", "age": 5}';
var json2 = '{"age": 5, "name": "Person1"}';

// Parse JSON strings to objects
var obj1 = JSON.parse(json1);
var obj2 = JSON.parse(json2);


for (var prop in obj1) {
    if (obj1.hasOwnProperty(prop)) {
      if (obj1[prop] !== obj2[prop]) {
        console.log("The JSON objects are not equal.");
        break;
      }
    }
  }console.log("The JSON objects are equal.");

// display all the flags in console
  async function resp (){
    const response =await fetch("https://restcountries.com/v3.1/all");
    
    const result = await response.json();
    for(let i=0;i<result.length;i++){
    console.log((result[i].name).common,((result[i]).flags).png);
    }
    }
    resp ();
    