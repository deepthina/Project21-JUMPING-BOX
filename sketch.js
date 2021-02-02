var canvas;
var music;
var box1, box2, box3, box4;
var ball;
var edges;

function preload() {
    music = loadSound("music.mp3");
}


function setup() {
    canvas = createCanvas(800, 600);

    edges = createEdgeSprites();

    //create 4 different surfaces
    box1 = createSprite(100, 580, 190, 20);
    box1.shapeColor = "blue";

    box2 = createSprite(300, 580, 190, 20);
    box2.shapeColor = "green";

    box3 = createSprite(500, 580, 190, 20);
    box3.shapeColor = "red";

    box4 = createSprite(700, 580, 190, 20);
    box4.shapeColor = "orange";


    //create box sprite and give velocity

    ball = createSprite(random(20, 750), 300, 30, 30);
    ball.shapeColor = "white";

    ball.velocityX = 5;
    ball.velocityY = -3;



}

function draw() {
    background("pink");
    //create edgeSprite

    ball.bounceOff(edges);


    //add condition to check if box touching surface and make it box

    if (ball.isTouching(box1)) {
        ball.shapeColor = "blue";
        music.play();
        ball.bounceOff(box1);
    }

    if (ball.isTouching(box2)) {
        ball.shapeColor = "green";
        music.play();
        ball.bounceOff(box2);
    }

    if (ball.isTouching(box3)) {
        ball.shapeColor = "red";
        music.stop();
        ball.velocityX = 0;
        ball.velocityY = 0;

    }

    if (ball.isTouching(box4)) {
        ball.shapeColor = "orange";
        music.play();
        ball.bounceOff(box4);
    }



    drawSprites();
}
