

function printOddNums(){
    for (var i = 0; i <= 20; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

printOddNums();

//---------------------------------------------------------

function addNums(){
    var sum = 0;
    for (var i = 1; i <= 5; i++) {
        sum += i;
        console.log(i, sum);
    }
}

addNums();

//---------------------------------------------------------