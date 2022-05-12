const express = require('express')
const convert = require('./converter')

const app = express()

app.use(express.urlencoded({ extended: false }))

app.get("/:bilangan/:value", (req, res) => {
    try {
        var { bilangan, value } = req.params
        convert(bilangan, value, res)
    }

    catch (error) {
        if (error.message == 'UnknownNumberSystem') {
            res.status(404)
            res.send({
                status: 404,
                result: "Error",
                message: 'Unknown number system!'
            })
        }
    }
})

const port = 1337
app.listen(port, console.log(`listening on http://localhost:${port}`))