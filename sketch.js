var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music.loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "pink";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "crimson";

    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(730,580,200,30);
    block4.shapeColor = "brown";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "pink";
        music.play();
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = "crimson";
        ball.setVelocityEach =0;
        music.stop();
    }
    if(block.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
        music.play();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "brown";
        music.play();
    }
    drawSprites();
}