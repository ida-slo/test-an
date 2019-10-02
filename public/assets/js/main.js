function generateNumbers() {
    let rows = document.getElementById("numbersTableBody").rows;
    for (let row of rows) {
        let i = 0;
        let sum = 0;
        for (let cell of row.cells) {
            if (i === row.cells.length - 1) {
                cell.innerHTML = sum;
            } else if (!(i === 0)) {
                let value = Math.floor(Math.random() * 20);
                sum += value;
                cell.innerHTML = value;
                checkPrime(value, cell);
            }
            i++;
        }
    }
}

// not sure if should use jQuery so written in vanilla javascript using XMLHttpRequest
function checkPrime(value, cell) {
    let request = new XMLHttpRequest();
    //get data from server
    //toDo:staticURL change for envVar
    request.open('GET', 'https://test-an.herokuapp.com/primes/' + value, true);
    //working with data
    request.onload = function () {
        let data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            if (data.prime) {
                cell.classList.add('prime');
            } else {
                cell.classList.remove('prime');
            }
        }
    };
    request.send();
}