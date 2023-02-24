// Declaring a var:
// let noVal;
// Initializing a var:
// let val = {}


const wordFrequencies = (str) => {
    // Initialize a new empty object
    const obj = {}
    // Initialize a new var to have the value of the string broken into an array, that contains each word as an element
    const strArr = str.split(' ')

    // Iterating over the strArr
    for (let i = 0; i < strArr.length; i++) {
        // Initialized a var to hold each word as we iterate over strArr
        const word = strArr[i]

        // Checked if obj has the word as a key
        if(obj[word]){
            // Adding one to the value
            obj[word] += 1
        } else {
            // Assigning the value 1 to the word in the obj, as it is the first occurence
            obj[word] = 1
        }
    }

    return obj
}


// console.log(wordFrequencies('this is a test test test a'))


const highestWord = (str) => {
    // Initialized a new var that hold the return value from wordFrequencies, and gave it str as an argument
    const obj = wordFrequencies(str)
    // Initialize highest number var w value 0
    let highestNum = 0
    // Declare a var that will hold the word w the highest value
    let highestWord

    // Iterate over the obj var
    for (const key in obj) {
        // console.log('Key', key)
        // console.log('Value', obj[key])

        //
        if (obj[key] > highestNum) {
            highestNum = obj[key]
            highestWord = key
        }
    }
    return { [highestWord]: highestNum }
}

// console.log(highestWord('this is a test test test a this this this'))




const cardIsValid = (str) => {
    // Create a temp array to store digits
    const numArr = str.split('')

    // Create boolean to double the digit or not
    let double = false

    // Create a new array to hold the new numbers
    const newArr = []

    // Iterate over the numArr, starting at the end and going down to the beginning
    for (let i = numArr.length - 1; i >= 0; i--) {
        // If double is truthy, then push the digit multiplied by 2 to the newArr
        if(double){
            newArr.push(parseInt(numArr[i]) * 2)
        // Otherwise push the digit to the newArr as is
        } else {
            newArr.push(parseInt(numArr[i]))
        }
        // Flip the boolean
        double = !double
    }

    // Create another array to hold all values AFTER breaking up numbers with two digits
    let allDigits = []

    newArr.forEach((num) => num >= 10 ? allDigits.push(num.toString().split('')) : allDigits.push(num))

    // Flatten the array; remove any nested values
    allDigits = allDigits.flat()


    // Initialize total var to 0
    let total = 0

    // Iterate over the allDigits array, and add each element to the total
    allDigits.forEach((digit) => total += parseInt(digit))

    return total % 10 === 0 ? true : false
}



console.log(cardIsValid('4408041234567893')) // output => true
console.log(cardIsValid('1234567890123456')) // output => false
console.log(cardIsValid('38520000023237')) // output => true