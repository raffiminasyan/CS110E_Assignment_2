let a = 5 ;
let b = 7 ;
let c = -9 ;
let discriminant = b * b - 4 * a * c ;
if (a === 0) {
    console.log("X is equal to" + -c / b)
} 
if (discriminant > 0) {
    x1 =  -b + Math.sqrt(discriminant) / 2 * a ;
    x2 =  -b - Math.sqrt(discriminant) / 2 * a ;
    console.log("x1 = " + x1 + "x2 =" + x2) ;
}
if(discriminant < 0) {
    console.log("Unsolvable")
}
if(discriminant === 0) {
    console.log("x4 = " + -b / 2 * a ) ;
}