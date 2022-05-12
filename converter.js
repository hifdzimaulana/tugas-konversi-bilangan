const { convert } = require('any-to-any')

const bases = {
    binary: 2,
    octal: 8,
    decimal: 10,
    hexadecimal: 16
}

function Converter(from, value, res) {

    if (!['binary', 'octal', 'decimal', 'hexadecimal'].includes(from)) {
        throw new Error("UnknownNumberSystem")
    }

    let result = { ...bases }
    delete result[from]

    for (const item in result) {
        result[item] = convert(value, bases[from], bases[item])
    }

    res.send({
        [from]: value,
        result
    })
    return true
}

module.exports = Converter