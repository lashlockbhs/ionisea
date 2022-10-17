// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.
// for me:  *  drawLine(x1, y1, x2, y2, color, lineWidth)

const max = Math.max(width,height)
const min = Math.min(width,height)
let player = 'X';
for (let editConst = 1; editConst > 0; editConst -= 1/3){
  drawLine(max/2 - (min*editConst), min*2/3, max/2 + min*editConst, min*2/3, 'black', 2)
}
for (let totalTurns = 0; totalTurns < 9; totalTurns++){
registerOnclick((x, y) => {
  drawText(player, x-min*0.1, y+min*0.1, 'black', min * 0.3);
  player == 'X' ? player = 'O' : player = 'X';
})};
