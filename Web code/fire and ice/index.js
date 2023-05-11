let nameArr=[];
let charArray=[];   
const para = document.createElement("p");
para.innerText = "This is a paragraph.";

async function resp (){
    try{
        const response =await fetch("https://anapioficeandfire.com/api/books");
    
        const result = await response.json();
        console.log(result
            );
        for(let i=0;i<result.length;i++){
            nameArr.push(result[i].name);
           //console.log(result[i].name);
           // console.log(nameArr);
          
           createElement(i);
           function createElement(i){
           
           const liItem = document.createElement("tr"); 
            //document.body.appendChild(liItem);  
            document.getElementById("tableRow").appendChild(liItem);
            liItem.id = `tableRow${i}`; 
            document.getElementById(`tableRow${i}`).innerHTML = `
            
                <td>${result[i].name} </td>
                <td> ${result[i].isbn}</td>
                <td>${result[i].numberOfPages} </td>
                <td> ${(result[i].authors)[0]}</td>
                <td> ${result[i].publisher} data</td>
                <td> ${(result[i].released).slice(0, 10)}</td>
                
                
            `;
            const charDa = document.createElement("td");
            document.getElementById(`tableRow${i}`).appendChild(charDa);
            charDa.id = `chard${i}`;
           
           }
           
           for(let j=10;j<=14;j++){
                    let charUrl=(result[i].characters[j]);
                //console.log(result[i].name);
                //console.log(charUrl);

                

                async function resp1(){
                const response =await fetch(charUrl);
                const result = await response.json();
                 //console.log(nameArr[i]);
                
                charArray.push(result.name)
                if(j==14) document.getElementById(`chard${i}`).innerHTML +=`    ${result.name}.`
                else document.getElementById(`chard${i}`).innerHTML +=`    ${result.name},`
                //else {console.log(result.name);}
                
                
             
                    
                        
                }
                resp1();
           }
           
          
           
           
        }






    }
    catch (error) {
       
        console.log("error");
      }

    
    
   
}
    resp ();
console.log(nameArr);
console.log(charArray);













