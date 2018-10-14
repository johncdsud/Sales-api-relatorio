module.exports = {
    telefone,
    celular,
    cep
}

function telefone(value) {
    if (!value)
        return '';
        
    value = value.toString();
    let ddd, number1, number2;

    if (value.length == 10) {
        ddd = value.substring(0, 2);
        number1 = value.substring(2, 6);
        number2 = value.substring(6);
    }
    else {
        ddd = '';
        number1 = value.substring(0, 4);
        number2 = value.substring(4);
    }

    return `(${ddd})${number1}-${number2}`;
}

function celular(value) {
    if (!value)
        return '';

    value = value.toString();
    let ddd, number1, number2;

    if (value.length == 11) {
        ddd = value.substring(0, 2);
        number1 = value.substring(2, 7);
        number2 = value.substring(7);
    }
    else {
        ddd = '';
        number1 = value.substring(0, 5);
        number2 = value.substring(5);
    }

    return `(${ddd})${number1}-${number2}`;
}

function cep(value) {
    if (!value)
        return '';

    value = value.toString();

    return `${value.substring(0, 5)}-${value.substring(5)}`
}