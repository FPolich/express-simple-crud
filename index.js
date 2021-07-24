const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const db = require("./bdd")
const port = 3001

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended:true,
    })
    ) 
    
//     app.get('/', (request, response) => {
//         response.json({ info: 'Node.js, Express and Postgres API'})
//     })

//     app.listen(port, () => {
//         console.log('App running on port ${port}.')
//     })

app.get('/getAll', db.getAll)
app.get('/getById/:id', db.getById)
app.post('/create', db.create)
app.put('/update/:id', db.update)
app.delete('/delete/:id', db.deleteUser)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })