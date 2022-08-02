const express = require('express')

const app = express()

app.set('views','./')

app.listen(3050,()=>{
    console.log("servidor local em http://localhost:3050")
})

const mongoose = require('mongoose')

const conexao = ()=>{
mongoose.connect('mongodb+srv://userresumo:0123456789@ac1tri.aganv.mongodb.net/?retryWrites=true&w=majority')
}

app.get('/',(req,res)=>{
    conexao()
res.render('index.ejs',{nome:"Fon", turma:"2EMIA", disciplina:"LP2"})
})