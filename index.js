const express = require('express')
const app = express()
const PORT = 3005
const users = require('./MOCK_DATA.json')
const fs = require('fs')
app.use(express.json())
app.get('/api/users', (req,res)=>{
    return res.json(users)
})

app.get('/users/:id', (req,res)=>{
    const id = Number(req.params.id)
    const user = users.find(user => user.id == id)
    return (res.json(user))
})

app.post('/users', (req,res)=>{

    const body = req.body
    users.push({
        id: users.length +1,
        first_name:body.first_name,
        last_name:body.last_name,
        email:body.email,
        gender:body.gender,
        job_title:body.job_title
    })
    
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users), (err,data)=>{
        return res.json(users)
    })
    
})
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})