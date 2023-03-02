import { animate } from './animation.js';
import graphics from './graphics.js';

const canvas = document.getElementById('screen');
const g = graphics(canvas);
const sides = 3

g.drawCircle(canvas.width/2, canvas.height/2, canvas.height, 'black', 2)

animate((elapsed) => {
});
