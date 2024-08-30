const express = require('express');

const app = express();

app.get("/", (request,response) =>{
    response.json({ menssage: "Hello World!"});
});

app.get("/api/exer1", (req,res) =>{
    const number1 = req.query.n1
    const number2 = req.query.n2
    
    if(number1 && number2){
        console.log(number1,number2)
        res.json({
            'n1':number1,
            'n2':number2,
            'resultado':parseInt(number1) + parseInt(number2)
        })
    }else{
        res.json({
            msg:"esta faltando queryParam Ex.: 127.0.0.1:3000/api/exer1?n1=15&n2=25"
        })
    }
})
app.get('/api/exer2', (req,res) =>{
    const horasTrabalhadas = req.query.horas
    const valorHora = req.query.valor
    if (horasTrabalhadas && valorHora) {
        const conta = parseFloat(horasTrabalhadas)*parseFloat(valorHora)
        const twoDecimal = parseFloat(conta.toFixed(2))
        res.json({
            "horasTrabalhadas":horasTrabalhadas,
            "valorHora":valorHora,
            'conta':twoDecimal,
            'resultado':`R$ ${twoDecimal}`
        })
    }else{
        res.json({
           msg:"esta faltando queryParam Ex.: 127.0.0.1:3000/api/exer2?horas=15&valor=25"
        })
    }
})
app.get('/api/exer3', (req,res)=>{
    const peso1 = req.query.p1
    const peso2 = req.query.p2
    const peso3 = req.query.p3
    const peso4 = req.query.p4
    const peso5 = req.query.p5
    if (peso1&&peso2&&peso3&&peso4&&peso5) {
        const soma = parseFloat(peso1)+parseFloat(peso2)+parseFloat(peso3)+parseFloat(peso4)+parseFloat(peso5) 
        const divsao = soma/5
        res.json({
            'peso1':peso1,
            'peso2':peso2,
            'peso3':peso3,
            'peso4':peso4,
            'peso5':peso5,
            'resultado':divsao
        })
    } else {
        res.json({
            msg:"esta faltando queryParam Ex.: 127.0.0.1:3000/api/exer3?p1=75&p2=75&p3=75&p4=75&p5=75"
         })
    }
})
app.get('/api/exer4', (req,res)=>{
    const celsius = req.query.celsius
    if (celsius) {
        const conta = (9*parseFloat(celsius)+160)/5 
        res.json({
            'Celsius':celsius,
            'Fahrenheit':conta
        })
    } else {
        res.json({
            msg:"esta faltando queryParam Ex.: 127.0.0.1:3000/api/exer4?celsius=25"
         })
    }
})
app.get('/api/exer5', (req,res)=>{
    const milhas = req.query.milhas
    if (milhas) {
        const conta = parseFloat(milhas)*1.60934
        res.json({
            milhas:milhas,
            quilometros:conta
        })
    } else {
        res.json({
            msg:"esta faltando queryParam Ex.: 127.0.0.1:3000/api/exer4?milhas=3"
        })
    }
})

app.listen(3000, ()=>{
    console.log('Servidor Aberto porta 3000')
})