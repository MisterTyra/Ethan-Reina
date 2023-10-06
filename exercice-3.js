function expandedForm(nombre) {
    const chiffres = nombre.toString();
    const resultat = [];

    for (let i = 0; i < chiffres.length; i++) {
        const chiffre = parseInt(chiffres[i]);
        if (chiffre !== 0) {
            const zeros = '0'.repeat(chiffres.length - i - 1);
            resultat.push(chiffre + zeros);
        }
    }

    return resultat.join(' + ');
}

console.log(expandedForm(70304));