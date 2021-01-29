var canvas;
var surface1
var surface2
var surface3
var surface4
var ball
var edges

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
   edges=createEdgeSprites();
    
   

    //create 4 different surfaces
    surface1=createSprite(698,600,200,40)
    surface1.shapeColor="green"
    surface2=createSprite(496,600,200,40)
    surface2.shapeColor="red"
    surface3=createSprite(294,600,200,40)
    surface3.shapeColor="yellow"
    surface4=createSprite(92,600,200,40)
    surface4.shapeColor="blue"
    ball=createSprite(random(20,750),10,20,20)
    
    ball.velocityX=4
    ball.velocityY=5


    //create box sprite and give velocity

}

function draw() {
    background(rgb(0,0,0));
    
    //music.play();

   
    ball.bounceOff(edges)
    

    if(surface2.isTouching(ball) ){
        ball.shapeColor = "red"
        music.stop();
        ball.velocityX=0
        ball.velocityY=0
    }
    if(surface1.isTouching(ball) && ball.bounceOff(surface1)){
        ball.shapeColor = "green"
       
    }
    if(surface3.isTouching(ball) && ball.bounceOff(surface3)){
        ball.shapeColor = "yellow"
        
    }
    if(surface4.isTouching(ball) && ball.bounceOff(surface4)){
        ball.shapeColor = "blue"
        
    }


    drawSprites();
    //add condition to check if box touching surface and make it box
}
