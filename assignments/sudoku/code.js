registerOnClick((x,y) => {
  let acc
  for (let x; x< 250000000; x++){
    let l = Math.random()/Math.random()
    if (acc<l)acc=l
  }
  drawText(acc,x,y,'black',25)
})