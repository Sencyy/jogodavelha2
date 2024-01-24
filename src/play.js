var Games = [0, 0, 0, 0, 0, 0, 0, 0, 0];

var Game1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var Game2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var Game3 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var Game4 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var Game5 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var Game6 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var Game7 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var Game8 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var Game9 = [0, 0, 0, 0, 0, 0, 0, 0, 0];

var CurrentPlay = "cross";

function GameButtonClick(posx, posy) {
    console.log(posx);
    console.log(posy);
    var CurrentGame;
            
    if (!(document.getElementById(`cross-${posx}-${posy}`).style.opacity === "100" || document.getElementById(`circle-${posx}-${posy}`).style.opacity === "100")) {
        if (CurrentPlay === "cross") {

    
            document.getElementById(`cross-${posx}-${posy}`).style.opacity = "100";
            document.getElementById(`circle-${posx}-${posy}`).style.opacity = "0";
            switch (posx) {

                case 1:
                    Game1[posy - 1] = 1;
                    console.log(Game1);
                    CurrentGame = {refTo: Game1}
                    break;
                case 2:
                    Game2[posy - 1] = 1;
                    CurrentGame = {refTo: Game2}
                    break;
                case 3:
                    Game3[posy - 1] = 1;
                    CurrentGame = {refTo: Game3}
                    break;
                case 4:
                    Game4[posy - 1] = 1;
                    CurrentGame = {refTo: Game4}
                    break;
                case 5:
                    Game5[posy - 1] = 1;
                    CurrentGame = {refTo: Game5}
                    break;
                case 6:
                    Game6[posy - 1] = 1;
                    CurrentGame = {refTo: Game6}
                    break;
                case 7:
                    Game7[posy - 1] = 1;
                    CurrentGame = {refTo: Game7}
                    break;
                case 8:
                    Game8[posy - 1] = 1;
                    CurrentGame = {refTo: Game8}
                    break;
                case 9:
                    Game9[posy - 1] = 1;
                    CurrentGame = {refTo: Game9}
                    break;


            }
            
            console.log(CurrentGame);
            CurrentPlay = "circle";
        } else if (CurrentPlay === "circle") {
            document.getElementById(`cross-${posx}-${posy}`).style.opacity = "0";
            document.getElementById(`circle-${posx}-${posy}`).style.opacity = "100";
        
            switch (posx) {

                case 1:
                    Game1[posy - 1] = 1;
                    console.log(Game1);
                    CurrentGame = Game1;
                    break;
                case 2:
                    Game2[posy - 1] = 1;
                    CurrentGame = Game2;
                    break;
                case 3:
                    Game3[posy - 1] = 1;
                    CurrentGame = Game3;
                    break;
                case 4:
                    Game4[posy - 1] = 1;
                    CurrentGame = Game4;
                    break;
                case 5:
                    Game5[posy - 1] = 1;
                    CurrentGame = Game5;
                    break;
                case 6:
                    Game6[posy - 1] = 1;
                    CurrentGame = Game6;
                    break;
                case 7:
                    Game7[posy - 1] = 1;
                    CurrentGame = Game7;
                    break;
                case 8:
                    Game8[posy - 1] = 1;
                    CurrentGame = Game8
                    break;
                case 9:
                    Game9[posy - 1] = 1;
                    CurrentGame = Game9;
                    break;


            }
            console.log(CurrentGame);
            CurrentPlay = "cross";
        }

        if (
            CurrentGame == [1, 0, 0, 0, 1, 0, 0, 0, 1] 
        ) {
            console.log("buceta");
        }

    }
}