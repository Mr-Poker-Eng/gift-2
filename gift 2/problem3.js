let price = "$ 27@7 4";

let chars = price.split("");
//console.log(chars);

let sum = 0;

for(let i=0; i<chars.length; i++){
    let element = chars[i];
    if(!isNaN(element) && element !== " "){
        sum += parseInt(element);
    }
}
console.log(sum);