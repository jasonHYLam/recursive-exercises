function sumRange(n, total = 0) {
    if (n == 0) return total;
    else {
        return sumRange(n-1, total + n)
    }
}

function sumRangeNew(n) {
    if (n == 0) return 0;
    else {
        return n + sumRangeNew(n-1)
    }
}

// console.log(sumRangeNew(4));

// console.log(
//     sumRange(4)
// )

function power(n, e) {
    if (e == 0) return 1;
    
    else {
        return n * power(n, e -1)
    }
}

// console.log(power(4, 3))


function factorial(n) {
    if (n == 1) return 1;
    else {
        return n * factorial(n-1);
    }
}

// console.log(factorial(3));


// TODO: try returning false if empty array heheh
function all(array, cb) {
    // if end of array is reached eg length is 0, return true
    if (array.length == 0) {return true}
    // or if first array element is false, return false
    else if (cb(array[0]) == false) {return false} 
    //else return all(smaller array like one element smaller, cb)
    else {
        array.shift()
        return all(array, cb);
    }
}

// console.log(
//     all([], (num) => {
//         return num < 7;
//     })
// )


// TODO: try returning null if empty array heheh
function productOfArray(array) { 
    let copy = array.slice();
    if (copy.length == 0) return 1;
    else {
        let first = copy[0];
        copy.shift();
        // what to return? probably current first element * recursive
        return first * productOfArray(copy)
    }

}

// console.log(
//     productOfArray([1, 2, 3]),
// )

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

// TODO: return false if value isn't present; might require a for loop
function contains(object, toSearch) {
    for (value of Object.values(object)) {
        // base condition: if NOT an object, then check for if it contains the desired value
        if (typeof value !== 'object') {
            if (value == toSearch) return true;
            // base condition: else if the final value is iterated through, return false

        } 
        else {
        // if value is a object, then go into that object
        if (typeof value === 'object') {
            return contains(value, toSearch)
        };
        }
    }

}
// console.log(
//     contains(nestedObject, 'foo')
// )


const testArray = [
    [[5], 3], 
    0, 
    2, 
    ['foo'], 
    [], 
    [4, [5, 6]]
]

function totalIntegers(element) {
        let counter = 0;
    if (typeof element === 'number') {
        return 1;
    }

    else if (Array.isArray(element)) {
        for (let subElement of element) {
            if (typeof subElement === 'string') continue;
            if (Array.isArray(subElement) && subElement.length == 0) continue;
            else {
                counter += totalIntegers(subElement)
            }
        }
        return counter;
    }
}

// console.log(totalIntegers(testArray))

function SumSquares(element) {
    let sum = 0;
    if (typeof element === 'number') {
        return element * element;

    } else if (Array.isArray(element)) {
        for (const subElement of element) {
            sum += SumSquares(subElement)
        }
        return sum;
    }
}

// var l = [1,2,3]; 
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

// l = [[1,2],3]; 
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

// l = [[[[[[[[[1]]]]]]]]] 
// console.log(SumSquares(l)); // 1 = 1

// l = [10,[[10],10],[10]] 
// console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

function replicate(repeats, number) {
    // base case: when number of repeats reaches 0, return?
    if (repeats <= 0) {
        return [];
    } else {
        const recursiveValue = (replicate(repeats - 1, number))
        recursiveValue.push(number);
        return recursiveValue;
    }
}


console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
// console.log(replicate(-2, 6)) // []