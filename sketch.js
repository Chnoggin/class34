var ball;
var database;
var positionb

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var databus = database.ref("ball/position");
    databus.on("value", readfop, showerror);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref("ball/position").set({
        x: positionb.x + x, y: positionb.y + y
    })

}

function readfop(data) {
positionb = data.val();
ball.x = positionb.x;
ball.y = positionb.y;  

}

function showerror () {



    console.log("error");
}