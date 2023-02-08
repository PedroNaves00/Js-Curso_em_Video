let num = [9,5,6,2,4]

num.sort()

/*for(let pos = 0; pos < num.length; pos++) {
    console.log(`O número na posição ${pos} é ${num[pos]}`)
}
*/

for(pos in num){
    console.log(`O número na posição ${pos} é ${num[pos]}`)
}

console.log(num.indexOf(5))