registerOnclick((x,y) => {
  let acc = 0;
  for (let x; x< 250000000; x++){
    const l = Math.random()/Math.random()
    if (acc<l)acc=l;
  }
  drawText(JSON.toString(acc),x,y,'black',25)
});