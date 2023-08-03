colors = [
  "red",
  "blue",
  "yellow",
  "green",
  "purple",
  "black",
  "grey",
  "brown",
  "pink",
  "cadetblue",
];

const createBoxColor = (line, column) => {
    const getRandomArray=getRandomColor(line*column);
    //console.log(getRandomArray);
  let sayac = 0;
  for (let i = 0; i < line; i++) {
    for (let j = 0; j < column; j++) {
      let createDiv = document.createElement("div");
      createDiv.classList = "cardBox";
  
      createDiv.style.backgroundColor = colors[getRandomArray[sayac]];
      createDiv.setAttribute("id",sayac);
      document.getElementById("gameCard").appendChild(createDiv);
      sayac++;
    }
    
  }

};

const getRandomColor = (cardNumber) => {
  const randomNumber = [];
  while (randomNumber.length < cardNumber) {
    const eldekiSayi = Math.floor(Math.random() * 10);
    const sayiAdedi = randomNumber.filter((sayi) => sayi === eldekiSayi).length;
    if (sayiAdedi < 2) {
      randomNumber.push(eldekiSayi);
    }
  }
  return randomNumber;
};



createBoxColor(5, 4);
