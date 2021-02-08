for (var j = 0; j <= 10000;  j++) {

    var notPrime = false;
    for (var i = 2; i <= j; i++) {
        if (j%i===0 && i!==j) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(j);
    }
}