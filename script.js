let source ;
let board = new Array(4);
let cols=4;
let rows=4;
let w,h;
let blackSpotR=Math.floor(Math.random()*rows);
let blackSpotC=Math.floor(Math.random()*cols);
let indexNeighbors=[[-1,0],[1,0],[0,-1],[0,1]];


function preload(){
    source=loadImage("img.jpg");
}

function setup(){
  createCanvas(400,400);
  w=width/cols; //COLS
  h=height/cols; //ROWS
  for(let i=0;i<rows;i++){
    board[i]=new Array(4);
    for(let j=0;j<cols;j++){
      let img=createImage(w,h);
      img.copy(source,j*100,i*100,w,h,0,0,w,h);
      board[i][j]=new Tile(img,i,j);
    }
  }
  board[blackSpotR][blackSpotC].img=-1;
  simpleShuffle();
}

function simpleShuffle() {
  for(let shuff=0;shuff<20;shuff++) {
    let neighbors=[];
    for(let index=0;index<indexNeighbors.length;index++) {
        if(0<=(blackSpotR+indexNeighbors[index][0]) && (blackSpotR+indexNeighbors[index][0])<=3 && 0<=(blackSpotC+indexNeighbors[index][1]) && (blackSpotC+indexNeighbors[index][1])<=3){
          neighbors.push([blackSpotR+indexNeighbors[index][0],blackSpotC+indexNeighbors[index][1]]);
        }
    }
    let randIndex=Math.floor(Math.random()*neighbors.length);
    swap(neighbors[randIndex][0],neighbors[randIndex][1]);
  }
}

function swap(i,j){
  let temp=board[blackSpotR][blackSpotC];
  board[blackSpotR][blackSpotC]=board[i][j];
  board[i][j]=temp;
  blackSpotR=i;
  blackSpotC=j;
}

function mousePressed(){
  let i=floor(mouseY/h);
  let j=floor(mouseX/w);
  tileMove(i,j);
}

function tileMove(i,j){
  let indexNeighbor=false;
  for(let index=0;index<indexNeighbors.length;index++){
    if(i==(blackSpotR+indexNeighbors[index][0]) && j==(blackSpotC+indexNeighbors[index][1])&& 0<=i && i<=3 && 0<=j && j<=3){
        indexNeighbor=true;
        swap(i,j);
        break;
    }
  }
  checkWin();
}

function checkWin() {
  let win=true;
  for(let i=0;i<board.length;i++) {
    for(let j=0;j<board[i].length;j++) {
      if (i!= board[i][j].originI || j!= board[i][j].originJ){
        win=false;
      }
    }
  }
  if(win){
    console.log('win');
  }
}

function draw(){
  for(let i = 0; i<4;i++){
    for(let j = 0; j<4; j++){
      if(board[i][j].img!=-1){
        image(board[i][j].img,j*100,i*100);
        strokeWeight(2);
        noFill();
        rect(j*100,i*100,w,h);
      }else{
        fill(0,0,0);
        rect(j*100,i*100,w,h);
      }
    }
  }
}
