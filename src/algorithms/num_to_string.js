const numberToString = (number) => {
    const base = 'A'.charCodeAt(0);
    return String.fromCharCode(base + (number))
}

export default numberToString;

console.log(numberToString(0)) // output: A