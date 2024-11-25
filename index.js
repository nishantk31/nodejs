const express = require('express')
const app = express()
const PORT = 3005
const users = require('./MOCK_DATA.json')

app.get('/api/users', (req,res)=>{
    return res.json(users)
})

app.get('/users/:id', (req,res)=>{
    const id = Number(req.params.id)
    const user = users.find(user => user.id == id)
    return (res.json(user))
})

app.post('/users', (req,res)>{
    
})
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})