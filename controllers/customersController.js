const{json} =require("express")
const Customersquery = require("../modules/customersModules")

//Function to get all Customers 

const getallCustomers = async(req,res)=>{
    try{
        const result=await Customersquery.getallCustomers();
        res.json(result)
    }catch(err){
        res.status(500).send("error on get on Customers"+err)
    }
}
    // Function for get an the Customers by id 


const getCustomersByIdQuery = async(req,res)=>{
    try{
        const result=await Customersquery.getCustomersByIdQuery();
        res.json(result)
    }catch(err){
        res.status(500).send("error on get on Customers"+err)
    }
}
// Function for add Customers

const addCustomers = async(req,res)=>{
    try{
        const result=await Customersquery.addCustomers();
        res.json(result)
    }catch(err){
        res.status(500).send("error on get on Customers"+err)
    }
}

    // Function for update Customers

     const updateCustomers = async(req,res)=>{
        try{
            const result=await Customersquery.updateCustomers();
            res.json(result)
        }catch(err){
            res.status(500).send("error on get on Customers"+err)
        }
    }

        // Function for Delete Customers

    const DeleteCustomers = async(req,res)=>{
        try{
            const result=await Customersquery.DeleteCustomers();
            res.json(result)
        }catch(err){
            res.status(500).send("error on get on Customers"+err)
        }
    }
    module.exports = {
        DeleteCustomers,
        updateCustomers,
        addCustomers,
        getCustomersByIdQuery,
        getallCustomers
    }

