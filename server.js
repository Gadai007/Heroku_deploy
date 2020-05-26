const express = require('express')
const app = express()
const PORT = process.env.PORT || 2121

app.set('view engine', 'hbs')
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

let task = [
    'sample task'
]

app.get('/', (req, res) => {
    res.render('index', {
        title: 'todolist',
        task
    })
})

app.post('/', (req, res) => {
    task.push(req.body.inpText)
    res.redirect('/')
})

app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`)
})