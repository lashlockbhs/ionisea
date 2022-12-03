/*
drawFilledRect (0, 0, width, height, 'black'); // use the red text to change the colors
var fujkYou = -10000
while (fujkYou <1000){
  drawLine(0, fujkYou, width, height, 'red'); //you can do it here as well
    //change the -x number to change the distance between circles, turn </= 0 and funny little page crash
    var fujkYou = fujkYou +9 //<- here!
}
var shithead = 1000
while (shithead >-190000) {
    drawLine(0, shithead, width, height, 'maroon'); //you can do it here as well
   // change the -x number to change the distance between circles, turn positive and funny little page crash
    var shithead = shithead -10 //<- here!
}

//drawFilledCircle (width/2, height/2, 150)

// mail bx uspsp code dont touch vvvvv

//drawFilledCircle (width/2,height/3, 100, "blue")
//drawFilledRect (width/2 - 100, height/2 - 100, 200, 200, 'blue');
//drawFilledRect (width/2 - 100, height/2 + 100, 60, 80, 'blue');
//drawFilledRect (width/2 + 40, height/2 + 100, 60, 80, 'blue');
//drawFilledRect (width/2 -75, height/2 - 120, 150, 60, 'teal');
//drawFilledRect (width/2 + 100, height/2 - 100, 50, 130, 'white');
*/
const z_sqr = (x,y) =>{
  return [x**2 - y**2, 2*x*y];
}
const f = (z, c) =>{
  return [z_sqr(z[0], z[1])[0] + c[0], z_sqr(z[0], z[1])[1] + c[1]]
}
const isPixelInSet = (c, iterations) =>{
  let z=[0,0]
  let i=0 
  for(i; i<iterations; i++){
    z=f(z, c);
    if(!isFinite(z[0])||!isFinite(z[1])){
    return i
    }
  }
  if(z[0]>2||z[1]>2){
    return i
  }
  return 0
}
const drawmandel = (iterations, bx, by, centerx, centery, zoom, c) =>{
  const ofx=-((centerx/(width/bx))*zoom);
  const ofy=((centery/(height/by))*zoom);
  let xm;
  let ym;
  drawLine(by/2, 0, bx/2, by, 'black')
  drawLine(0, by/2, bx, by/2, 'black')
  for(let y=-ofy; y<=by-ofy; y++){
    for(let x=-ofx; x<=bx-ofx; x++){
      xm=(-2-(ofx/bx))/zoom+((4/zoom)/bx)*x
      ym=(2+(ofy/by))/zoom-((4/zoom)/by)*y
      let pixelinset = isPixelInSet([xm, ym], iterations)
      pixelinset===0 ? drawLine(x+ofx, y+ofy, x+1+ofx, y+ofy, c) : drawLine(x+ofx, y+ofy, x+1+ofx, y+ofy, 'hsl(' + (pixelinset*2) + ', 100%, 50%)')
    }
  }
}
const x = 31
const y = 0 
const maxiterations = 10000
const zoom = 10000
drawmandel(maxiterations, height, height, x, y, zoom, 'black')