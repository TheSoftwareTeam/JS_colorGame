colors=["red","blue","yellow","green","purble","black","grey","brown","pink","cadetblue"];

const createBoxColor=(line,column)=>{
   
    for (let i = 0; i < line; i++) {
        for (let j = 0; j < column; j++) {
     
            let createDiv= document.createElement("div");
            createDiv.classList="cardBox";
            createDiv.style.backgroundColor=colors[j];
            document.getElementById("gameCard").appendChild(createDiv);
            


        }
        
    }

}

const getRandomColor=(cardNumber)=>{
    let randomNumber=[];
    
    for (let i = 1; i <= cardNumber; i++) {
        
        randomNumber[i] = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        for (let j = 1; j <= cardNumber; j++) {
            if(randomNumber[j]==randomNumber[i]){

            }
            
        }
    
        
        
    }
    return randomNumber;
   
}

console.log(getRandomColor(20));
















createBoxColor(5,4);