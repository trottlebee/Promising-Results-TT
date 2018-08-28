// Promising Results exercise - 1-3 //

slowMath.add(6, 2)
    .then((result) => {
        console.log(result);
        return slowMath.multiply(result, 2)
    })

    .then((result) => {
        console.log(result);
        return slowMath.divide(result, 4)
    })

    .then((result) => {
        console.log(result);
        return slowMath.subtract(result, 3)
    })

    .then((result) => {
        console.log(result);
        return slowMath.add(result, 98)
    })

    .then((result) => {
        console.log(result);
        return slowMath.remainder(result, 2)
    })

    .then((result) => {
        console.log(result);
        return slowMath.multiply(result, 50)
    })

    .then((result) => {
        console.log(result);
        return slowMath.remainder(result, 40)
    })

    .then((result) => {
        console.log(result);
        return slowMath.add(result, 32)
    })

    .then((result) => {
        console.log(result);
        setTimeout(() => {
            console.log(`The final result is ${result}.`)
        }, 3000)
    }).catch((error) => {
        console.log(error);

    })

    //* Promising Results exercise - 4 - Error: Error adding values -2 and 98.
    //

// slowMath.add(1, 1)
// .then((result) => {
//     console.log(result);
//     return slowMath.multiply(result, 2)
// })

// .then((result) => {
//     console.log(result);
//     return slowMath.divide(result, 4)
// })

// .then((result) => {
//     console.log(result);
//     return slowMath.subtract(result, 3)
// })

// .then((result) => {
//     console.log(result);
//     return slowMath.add(result, 98)
// })

// .then((result) => {
//     console.log(result);
//     return slowMath.remainder(result, 2)
// })

// .then((result) => {
//     console.log(result);
//     return slowMath.multiply(result, 50)
// })

// .then((result) => {
//     console.log(result);
//     return slowMath.remainder(result, 40)
// })

// .then((result) => {
//     console.log(result);
//     return slowMath.add(result, 32)
// })

// .then((result) => {
//     console.log(result);
//     setTimeout(() => {
//         console.log(`The final result is ${result}.`)
//     }, 3000)
// }).catch((error) => {
//     console.log(error);

// })