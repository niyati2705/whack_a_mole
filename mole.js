
let currMoleTile; 
let currPlantTile;
let score = 0;
let gameOver = false;

window.onload= function(){
    setGame();
}

function setGame(){
    //set grid for game board
    //9 tiles; 
    for(let i=0;i<9;i++){ // i 0-8, stops at 9
        //id 0 - 8
        let tile= document.createElement("div");
        tile.id= i.toString();
        //we are taking the nine tags we created and accessing this tag with id "board" and inserting the tag inside the board id div tag
        //now are board has 9 div tags 

        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 1000); //1sec
    setInterval(setPlant, 2000);
}
function getRandomTile(){
    //return random number; (0-1) * 9 = (0-9)
    //in general return a random no from 0 to 1 but on multiplying; range=0 to 9, but doesnt include 9
    //therefore; round it with math.floor; 0->8 integers
    let num= Math.floor(Math.random()*9);
    return num.toString();  //return as string to use as id 
}
function setMole(){
    //game over
    if(gameOver){
        return;
    }
    //clear all the tags within this div tag
    if(currMoleTile){
        currMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img")
    mole.src= "./monty-mole.png";

    let num = getRandomTile();

    //the mole and plant might occupy the same tile, so both may be stacked on top of each other
    //before moving mole to another tile, check
    if(currPlantTile && currPlantTile.id == num){
        return;
    }

    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
    //it will take a random tile which is a div tag adn add the image tag inside it
}

function setPlant(){
    //game over
    if(gameOver){
        return;
    }
    //clear
    if(currPlantTile){
        currPlantTile.innerHTML="";
    }

    let plant = document.createElement("img");
    plant.src= "./piranha-plant.png";

    let num  = getRandomTile();

    if(currMoleTile && currMoleTile.id==num){
        return;
    }
    currPlantTile= document.getElementById(num);
    currPlantTile.appendChild(plant);

}


function selectTile(){
    if(gameOver){
        return;
    }
    //this; clicked tile
    if(this== currMoleTile){
        score +=10;
        document.getElementById("score").innerText= score.toString(); //update score
    }
    else if(this== currPlantTile){
        document.getElementById("score").innerText= "GAME OVER: " + score.toString();
        gameOver=true;
    }
}

