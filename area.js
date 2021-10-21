let tBase = 8;
let tHeight = 10 ;
let rWidth = 12 ;
let rHeight = 14 ;
let AreaOfTriangle = tBase * tHeight / 2 ;
let AreaOfRectangle = rWidth * rHeight ; 
if (AreaOfRectangle > AreaOfTriangle) {
    console.log("The rectangle has a bigger area") ;
} else if (AreaOfTriangle > AreaOfRectangle) {
    console.log("The triangle has a bigger area") ;
} else {
    console.log("The areas are equal") ;
}