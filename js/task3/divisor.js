
function checkDivisors(number) {
    let numArray = [];

    for (let i = 1; i <= number; ++i) {
        let numRep = "";
        if (i % 2 == 0) {
            numRep = "yu";
        }
        if (i % 3 == 0) {
            numRep = numRep == "" ? "gi" : numRep + "-gi";
        }
        if (i % 5 == 0) {
            numRep = numRep == "" ? "oh" : numRep + "-oh";
        }
        numArray.push(numRep == "" ? i : numRep);
    }
    return numArray;
}

let hundred = checkDivisors(100);
let thirtyFive = checkDivisors(35);

// console.log(hundred);
// console.log(thirtyFive);
