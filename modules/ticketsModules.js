const {knex} = require("./connections");

const getallTicket = async () => {
    const query1 = await knex.select().from ("tickets")
    return (query1)

    }
    
    const getTicketsByIdQuery =async (id) => {
        const query2 = await knex.select().from ("tickets")
        return (query2)

    }
    const addTickets = async (Tickets,res,req) => {
        const result = await knex("tickets").insert("tickets");
        return result;}
        
        const updateTickets = async (Tickets,res,req) => {
            const result = await knex("tickets").insert(Tickets);
            return result;}

            const DeleteTickets= async (Tickets,res,req) => {
                const result = await knex("tickets").insert(Tickets);
                return result;
        }
        module.exports={
            DeleteTickets,
            updateTickets,
            addTickets,
            getTicketsByIdQuery,
            getallTicket
        }
        