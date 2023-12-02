let santasNumber = 0;

callSanta(127, 267);
callSanta(1110, 1378);
callSanta(3239293, 3239330);

function callSanta(a, b) {
    while(a <= b) {
        santasNumber += a;
        a++;
    }
}

console.log(santasNumber);
