const express = require('express');
const app = express();
const port = process.env.PORT || 80;
app.use(express.static('./public'));

app.get('/primes/:primeNr', (req, res) => {
    return res.json({
        number: req.params.primeNr,
        prime: isPrime(req.params.primeNr)
    });
});

function isPrime(value) {
    if (value === 1) {
        return false;
    } else if (value === 2) {
        return true;
    } else {
        for (let x = 2; x < value; x++) {
            if (value % x === 0) {
                return false;
            }
        }
        return true;
    }
}

app.listen(port, () => console.log(`App working on port ${process.env.PORT}`));