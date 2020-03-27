const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var grid = [], dot;
var line, top, bottom, left, right;

function setup(){
    createCanvas(500, 500);
    dotLoop();
    // top = createSprite();
    // top.visible = false;
    // bottom = createSprite();
    // bottom.visible = false;
    // left = createSprite();
    // left.visible = false;
    // right = createSprite();
    // right.visible = false;
}

function draw(){
    //background(255);

    
    dotline();
    drawSprites();
}

function dotLoop(){
    for(var y = 2; y < 22; y++){
        for(var x = 2; x < 22; x++){
            dot = createSprite(x*20, y*20, 5, 5);
            grid.push(dot);
        }
    }
}
function dotline(){
    for(var dotL = 0; dotL < 400; dotL++){
        //grid[dotL];
        if (mousePressedOverD(grid[dotL])){
            if(dotL >= 20){
                console.log("top");
                top = createSprite(grid[dotL].x, grid[dotL].y - 10, 3, 20);
            }
            if(dotL < 380){
                console.log("bottom");
                bottom = createSprite(grid[dotL].x, grid[dotL].y + 10, 3, 20);
            }
            if(dotL % 20 !== 0){
                console.log("left");
                left = createSprite(grid[dotL].x - 10, grid[dotL].y, 20, 3);
            }
            if((dotL + 1) % 20 !== 0){
                console.log("right");
                right = createSprite(grid[dotL].x + 10, grid[dotL].y, 20, 3);
            }
            
        }
        console.log(top);
        //console.log(frameCount);
        // if(mousePressedOverL(top)){
        //     bottom.visible = false;
        //     left.visible = false;
        //     right.visible = false;
        // }
        // if(mousePressedOverL(bottom)){

        // }
        // if(mousePressedOverL(left)){

        // }
        // if(mousePressedOverL(right)){

        // }
    }
}
function mousePressedOverD(d){
    d.mouseActive = true;
    //console.log("out of the If D");
    if(mouseIsPressed && d.mouseIsOver){
       d.visible = false;
       console.log("in the If D");
    }
}
function mousePressedOverL(l){
    l.mouseActive = true;
    //console.log("out of the If L");
    if(mouseIsPressed && l.mouseIsOver){
       l.visible = true;
       console.log("in the If L");
    }
}