const{json} =require("express")
const adminsquery = require("../modules/adminModules")


//Function to get all admins 

const getallAdmin = async(req,res)=>{
    try{
        const result=await adminsquery.getallAdmin();
        res.json(result)
    }catch(err){
        res.status(500).send("error on get on admins"+err)
    }
}
    // Function for get an the admin by id 


const getAdminByIdQuery = async(req,res)=>{
    try{
        const result=await adminsquery.getAdminByIdQuery();
        res.json(result)
    }catch(err){
        res.status(500).send("error on get on admins"+err)
    }
}


// Function for add admins

const addAdminstrators = async(req,res)=>{
    try{
        const result=await adminsquery.addAdminstrators();
        res.json(result)
    }catch(err){
        res.status(500).send("error on get on admins"+err)
    }
}

    // Function for update admins

     const updateAdminstrators = async(req,res)=>{
        try{
            const result=await adminsquery.updateAdminstrators();
            res.json(result)
        }catch(err){
            res.status(500).send("error on get on admins"+err)
        }
    }

    const DeleteAdminstrators = async(req,res)=>{
        try{
            const result=await adminsquery.DeleteAdminstrators();
            res.json(result)
        }catch(err){
            res.status(500).send("error on get on admins"+err)
        }
    }
    module.exports = {
        DeleteAdminstrators,
        updateAdminstrators,
        addAdminstrators,
        getAdminByIdQuery,
        getallAdmin
    }

