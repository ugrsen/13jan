const n = [
    [7 , 1 , 2 , 4],
    [9 , 8 , 5 , 6],
    [2 , 6 , 9 , 8],
    [9 , 5 , 2 , 10],
 ] ;

function arrayAdd(){
let sum = 0;
for(var i=0; i<n.length; i++){
 for(var j=0; j<n[i].length; j++){
     if(i===j){
         sum += n[i][j];
     }
 }
}
return sum;
}
var add = arrayAdd();
function display(){
var para = document.getElementById('add');
para.innerText = "result = " + add ;
}