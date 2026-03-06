const express = require("express")
const app = express()

app.get("/idade/:nome/:idade", (req, res)=>{
    const{nome, idade} = req.params
    res.status(201).json({
        mensagem:`Nome: ${nome}, Ano de nascimento: ${idade}`
    })
})

app.listen(3029, ()=>{
        console.log("Joao, servidor on")
})