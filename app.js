const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors =require ('cors');
app.use(express.json())
app.use(cors())


const adminsRouter = require('./routers/adminstrators')
app.use("/api/adminstrators",adminsRouter)

app.get("/api/adminstrators",async(req,res)=>{
const adminstators=await getallAdmin()
res.json(adminstators)
})




const airlineRouter = require('./routers/airlines')
app.use("/api/airlines",airlineRouter)

app.get("/api/airlines",async(req,res)=>{
const airline=await getallAirlines()
res.json(airline)
})




const countriesRouter = require('./routers/countries')
app.use("/api/countries",countriesRouter)

app.get("/api/countries",async(req,res)=>{
const countries=await getallCountries()
res.json(countries)
})


const customersRouter = require('./routers/customers')
app.use("/api/customers",customersRouter)

app.get("/api/customers",async(req,res)=>{
const customers=await getallCustomers()
res.json(customers)
})


const ticketsRouter = require('./routers/tickets')
app.use("/api/tickets",ticketsRouter)

app.get("/api/tickets",async(req,res)=>{
const tickets=await getallTicket()
res.json(tickets)
})


const flightsRouter = require('./routers/flights')
app.use("/api/flights",flightsRouter)

app.get("/api/flights",async(req,res)=>{
const flights=await getallFlights()
res.json(flights)
})



//port

app.listen(4000,(err)=> {
    if (err){
        console.log(err);
    }else {
        console.log("the server is up")
    }});




