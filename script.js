let source ;
let board = new Array(4);
let cols=4;
let rows=4;
let w,h;
let blackSpotR=Math.floor(Math.random()*rows);
let blackSpotC=Math.floor(Math.random()*cols);

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
      board[i][j]=new Tile(img,i*100,j*100,i,j);
    }
  }
  board[blackSpotR][blackSpotC].img=-1;
  simpleShuffle();
}

function simpleShuffle() {
  let previousPosition=[null,null];
  for(let shuff=0;shuff<100;shuff++){
    let neighbors=[];
    for(let i=-1;i<=1;i+=2){
      for(let j=-1;j<=1;j+=2){
        console.log((blackSpotR+i)<=null);
        if((blackSpotR+i)<=null){
          console.log("IN");
        }
      }
    }

    break;
  }
}

function swap(i,j){
  let temp = board[blackSpotR][blackSpotC];
  board[blackSpotR][blackSpotC] = board[i][j];
  board[blackSpotR][blackSpotC].currentI = temp.currentI;
  board[blackSpotR][blackSpotC].currentJ = temp.currentJ;
}

function mousePressed(){

}

function draw(){
  for(let i = 0; i <4;i++){
    for(let j = 0; j < 4; j++){
      if(board[i][j].img!=-1){
        image(board[i][j].img,board[i][j].currentJ,board[i][j].currentI);
        strokeWeight(2);
        noFill();
        rect(j*100,i*100,w,h);
      }
    }
  }
}
