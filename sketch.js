var ball;
var dataBase, position;
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    dataBase = firebase.database();
    var bolinha = dataBase.ref("ball/position");
    bolinha.on("value", readPositon, WindownMaker);
}


function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        WritePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        WritePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        WritePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        WritePosition(0,+1);
    }
    drawSprites();

}

function WritePosition(x,y){
    dataBase.ref("ball/position").set({
        "x": position.x + x,
        "y": position.y + y,
    })
}

function WindownMaker(){
    console.log("SHEEEESH");
}

function readPositon(batata_com_pepino){
    position = batata_com_pepino.val();
    ball.x = position.x;
    ball.y = position.y;
}