function isDigit(char) {
    return char >= '0' && char <= '9';
}

function numInStr(chaine) {
    const result = chaine.filter(str => {
        const chars = Array.from(str);
        for (const char of chars) {
            if (isDigit(char)) {
                return true;
            }
        }
        return false;
    });

    return result;
}

console.log(numInStr(["1a", "a", "2b", "b"]));