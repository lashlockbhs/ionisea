drawFilledRect (0, 0, width, height, 'white');
var shithead = 1000
while (shithead >-250000) {
    drawLine(0, shithead, width, height, 'black');
   // change the -x number to change the distance between circles, KEEP NEGATIVE!!!!
    var shithead = shithead -5 //<- here!
}
drawFilledCircle (width/2,height/3, 100, "white")
drawFilledRect (width/2 - 100, height/2 - 100, 200, 200, 'white');
drawFilledRect (width/2 + 100, height/2 - 100, 50, 120, 'white');
drawFilledRect (width/2 - 100, height/2 + 100, 60, 80, 'white');