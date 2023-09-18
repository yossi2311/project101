const{json} =require("express")
const flightsquery = require("../modules/flightsModules")

//Function to get all Flights 

const getallFlights = async(req,res)=>{
    try{
        const result=await flightsquery.getallFlights();
        res.json(result)
    }catch(err){
        res.status(500).send("error on get on Flights"+err)
    }
}
    // Function for get an the Flights by id 


const getFlightByIdQuery = async(req,res)=>{
    try{
        const result=await flightsquery.getFlightByIdQuery();
        res.json(result)
    }catch(err){
        res.status(500).send("error on get on Flights"+err)
    }
}
// Function for add Flight

const addFlight = async(req,res)=>{
    try{
        const result=await flightsquery.addFlight();
        res.json(result)
    }catch(err){
        res.status(500).send("error on get on Flight"+err)
    }
}

    // Function for update Flight

     const updateFlights = async(req,res)=>{
        try{
            const result=await flightsquery.updateFlights();
            res.json(result)
        }catch(err){
            res.status(500).send("error on get on Flight"+err)
        }
    }

        // Function for Delete Flight

    const DeleteFlights = async(req,res)=>{
        try{
            const result=await flightsquery.DeleteFlights();
            res.json(result)
        }catch(err){
            res.status(500).send("error on get on Flight"+err)
        }
    }
    module.exports={
        DeleteFlights,
        updateFlights,
        addFlight,
        getFlightByIdQuery,
        getallFlights

    }

