const express = require('express')
const app = express()
const parkings = require('./parkings.json')
const reservations = require('./reservations.json')


// Middleware
app.use(express.json())

app.get('/parkings', (req,res) => {
    res.status(200).json(parkings)
})


app.get('/reservations', (req,res) => {
    res.status(200).json(reservations)
})



app.get('/parkings/:id/reservations', (req,res) => {
    const id = parseInt(req.params.id)
    const reservs = reservations.filter(reservs => reservs.parkingId === id)
    res.status(200).json(reservs)
})

app.get('/parkings/:idp/reservations/:idr', (req,res) => {
    const idp = parseInt(req.params.idp)
    const idr = parseInt(req.params.idr)
    const reserv = reservations.filter(reserv => reserv.parkingId === idp && reserv.id === idr) 
    res.status(200).json(reserv)
})

app.get('/parkings/:id/reservations/paris', (req,res) => {
    const id = parseInt(req.params.id)
    const reserv = reservations.filter(reserv => reserv.city === 'Paris')
    res.status(200).json(reserv)
})

app.post('/parkings/:id/reservations', (req,res) => {
    parkings.push(req.body)
    res.status(200).json(reservations)
})


app.post('/parkings', (req,res) => {
    parkings.push(req.body)
    res.status(200).json(parkings)
})

app.put('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let parking = parkings.find(parking => parking.id === id)
    parking.name =req.body.name,
    parking.city =req.body.city,
    parking.type =req.body.type,
    res.status(200).json(parking)
})

app.put('/parkings/:idp/reservations/:idr/reservations', (req,res) => {
    const idp = parseInt(req.params.idp)
    const idr = parseInt(req.params.idr)
    let parking = parkings.find(parking => parking.id === id)
    parking.name =req.body.name,
    parking.city =req.body.city,
    parking.type =req.body.type,
    res.status(200).json(reservations)
})

app.delete('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let parking = parkings.find(parking => parking.id === id)
    parkings.splice(parkings.indexOf(parking),1)
    res.status(200).json(parkings)
})


app.listen(8080, () => {
    console.log("Serveur à l'écoute")
})