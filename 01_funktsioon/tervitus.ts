let eesnimi:string="Juku";
//let eesnimi:string=56;
let vanus:number=17;
console.log("abc");
console.log("Tere, "+eesnimi);
if(vanus<7){
    console.log("Tasuta");
} else {
    console.log("Osta pilet");
    // Teata, kas tuleb osta lapsepilet või täispilet
   if(vanus<=16){
     console.log("lapsepilet");
   } else {
     console.log("täispilet");
   }
}
let symbolid:string[]=[];
for(let nr=0; nr<vanus; nr++){
    symbolid.push("*");
}
console.log(symbolid.join(""));