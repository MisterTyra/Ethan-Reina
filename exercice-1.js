function numOfDigit(nombre) {
    let listechiffre = nombre.toString().split("");
    let nombredechiffre = listechiffre.length;
    return nombredechiffre;
}
console.log(numOfDigit(1000));