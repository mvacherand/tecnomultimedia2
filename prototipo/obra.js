let trazos = [];
let cantidad = 8;
let colores;

function preload(){
  for( let i=0 ; i<cantidad ; i++ ){
    let nombre = "data/trazo"+nf(i,2)+".png"; 
    trazos[i] = loadImage( nombre );
  }
  colores = new Colores( "data/obra1.jpeg" );
}


function setup() {
  createCanvas(1000, 800);
  background(200,0,0);
  imageMode( CENTER );
  
}

function draw() {
  let cual = int(random( cantidad ));
  let x = random( width );
  let y = random( height );
  let unColor = colores.darColor();
  tint( unColor );
  image( trazos[cual] , x , y );
  }
function mousePressed(){
    
   }
