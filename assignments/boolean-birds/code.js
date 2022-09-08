/*
 * Important facts about the birds of Booleana.
 *
 * Coloration and markings:
 *
 *   - Flobby Birds and Bloggy Birds are red.
 *   - Flibble Birds and Globby Birds are not red.
 *   - Flobby Birds and Flibble Birds are spotted.
 *   - Bloggy Birds and Globby Birds are not spotted.
 *
 * Diet:
 *
 *   - Flobby Birds eat fish, nuts, and worms.
 *   - Bloggy Birds eat mice, nuts, and worms.
 *   - Flibble Birds eat fish, mice, and worms.
 *   - Globby Birds eat fish, mice, and nuts.
 *
 */
function isFlobbyBird(red,spotted){
    return red && spotted
}
function isBloggyBird(red,spotted){
    return red && !spotted
}
function isFlibbleBird(red,spotted){
    return !red && spotted
}
function isGlobbyBird(red,spotted){
    return !red && !spotted
}
function eatsWorms (red,spotted){
  return red || spotted
}
function eatsNuts (red,spotted){
  return red || !spotted
}
function eatsFish(red,spotted){
  return !red || spotted
}
function eatsMice(red,spotted){
  return !red || !spotted
}
function isRed (b1,b2,b3,b4){
    b1='Flobby';
    b2='Bloggy';
    b3='Flibble';
    b4='Globby';
    return b1 = true
    
}