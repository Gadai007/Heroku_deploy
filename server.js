const express = require('express')
const app = express()
const POST = process.env.POST || 2121

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

app.listen(POST, () => {
    console.log('server started on http://localhost:2121')
})