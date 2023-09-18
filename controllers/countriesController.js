const{json} =require("express")
const countriesquery = require("../modules/countriesModules")

//Function to get all countries 

const getallCountries = async(req,res)=>{
    try{
        const result=await countriesquery.getallCountries();
        res.json(result)
    }catch(err){
        res.status(500).send("error on get on countries"+err)
    }
}
    // Function for get an the countries by id 


const getCountriesByIdQuery = async(req,res)=>{
    try{
        const result=await countriesquery.getCountriesByIdQuery();
        res.json(result)
    }catch(err){
        res.status(500).send("error on get on countries"+err)
    }
}
// Function for add countries

const addCountries = async(req,res)=>{
    try{
        const result=await countriesquery.addCountries();
        res.json(result)
    }catch(err){
        res.status(500).send("error on get on countries"+err)
    }
}

    // Function for update countries

     const updateCountries = async(req,res)=>{
        try{
            const result=await countriesquery.updateCountries();
            res.json(result)
        }catch(err){
            res.status(500).send("error on get on countries"+err)
        }
    }

        // Function for Delete countries

    const DeleteCountries = async(req,res)=>{
        try{
            const result=await countriesquery.DeleteCountries();
            res.json(result)
        }catch(err){
            res.status(500).send("error on get on countries"+err)
        }
    }
    module.exports ={
        DeleteCountries,
        updateCountries,
        addCountries,
        getCountriesByIdQuery,
        getallCountries
        }



