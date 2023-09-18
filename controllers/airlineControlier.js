const{json} =require("express")
const Airlinsquery = require("../modules/airlineModules")

//Function to get all Airline 

const getallAirlins = async(req,res)=>{
    try{
        const result=await Airlinsquery.getallAirlins();
        res.json(result)
    }catch(err){
        res.status(500).send("error on get on Airline"+err)
    }
}
    // Function for get an the Airline by id 


const getAirlinsByIdQuery = async(req,res)=>{
    try{
        const result=await Airlinsquery.getAirlinsByIdQuery();
        res.json(result)
    }catch(err){
        res.status(500).send("error on get on airline"+err)
    }
}
// Function for add Airline

const addAirlines = async(req,res)=>{
    try{
        const result=await Airlinsquery.addAirlines();
        res.json(result)
    }catch(err){
        res.status(500).send("error on get on Airline"+err)
    }
}

    // Function for update Airline

     const updateAirlines = async(req,res)=>{
        try{
            const result=await Airlinsquery.updateAirlines();
            res.json(result)
        }catch(err){
            res.status(500).send("error on get on Airline"+err)
        }
    }

        // Function for Delete Airline

    const DeleteAirlines = async(req,res)=>{
        try{
            const result=await Airlinsquery.DeleteAirlines();
            res.json(result)
        }catch(err){
            res.status(500).send("error on get on Airline"+err)
        }
    }
    module.exports ={
        DeleteAirlines,
        updateAirlines,
        addAirlines,
        getAirlinsByIdQuery,
        getallAirlins
    }

