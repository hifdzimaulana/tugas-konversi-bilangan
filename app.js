const express = require('express')
const convert = require('any-to-any').convert

const app = express()

app.use(express.urlencoded({ extended: false }))

app.get("/binary/:bilangan", (req, res) => {
    var { bilangan } = req.params
    var baseFrom = 2
    var result = {
        binary: bilangan,
        result: {
            octal: convert(bilangan, baseFrom, 8),
            decimal: convert(bilangan, baseFrom, 10),
            hexadecimal: convert(bilangan, baseFrom, 16)
        }
    }
    res.json(result)
})

app.get("/octal/:bilangan", (req, res) => {
    var { bilangan } = req.params
    var baseFrom = 8
    var result = {
        octal: bilangan,
        result: {
            binary: convert(bilangan, baseFrom, 2),
            decimal: convert(bilangan, baseFrom, 10),
            hexadecimal: convert(bilangan, baseFrom, 16)
        }
    }
    res.json(result)
})

app.get("/decimal/:bilangan", (req, res) => {
    var { bilangan } = req.params
    var baseFrom = 10
    var result = {
        decimal: bilangan,
        result: {
            binary: convert(bilangan, baseFrom, 2),
            octal: convert(bilangan, baseFrom, 8),
            hexadecimal: convert(bilangan, baseFrom, 16)
        }
    }
    res.json(result)
})

app.get("/hexadecimal/:bilangan", (req, res) => {
    var { bilangan } = req.params
    var baseFrom = 16
    var result = {
        hexadecimal: bilangan,
        result: {
            binary: convert(bilangan, baseFrom, 2),
            octal: convert(bilangan, baseFrom, 8),
            decimal: convert(bilangan, baseFrom, 10)
        }
    }
    res.json(result)
})

const port = 1337
app.listen(port, console.log(`listening on http://localhost:${port}`))