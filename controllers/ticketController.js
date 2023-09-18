const{json} =require("express")
const Ticketquery = require("../modules/ticketsModules")

//Function to get all Ticket 

const getallTicket = async(req,res)=>{
    try{
        const result=await Ticketquery.getallTicket();
        res.json(result)
    }catch(err){
        res.status(500).send("error on get on Ticket"+err)
    }
}
    // Function for get an the Ticket by id 


const getTicketsByIdQuery = async(req,res)=>{
    try{
        const result=await Ticketquery.getTicketsByIdQuery();
        res.json(result)
    }catch(err){
        res.status(500).send("error on get on Ticket"+err)
    }
}
// Function for add Ticket

const addTickets = async(req,res)=>{
    try{
        const result=await Ticketquery.addTickets();
        res.json(result)
    }catch(err){
        res.status(500).send("error on get on Ticket"+err)
    }
}

    // Function for update Ticket

     const updateTickets = async(req,res)=>{
        try{
            const result=await Ticketquery.updateTickets();
            res.json(result)
        }catch(err){
            res.status(500).send("error on get on Flight"+err)
        }
    }

        // Function for Delete Ticket

    const DeleteTickets=  async(req,res)=>{
        try{
            const result=await Ticketquery.DeleteTickets();
            res.json(result)
        }catch(err){
            res.status(500).send("error on get on Ticket"+err)
        }
    }
    module.exports={
        DeleteTickets,
        updateTickets,
        addTickets,
        getTicketsByIdQuery,
        getallTicket

    }


