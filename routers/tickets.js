const express =require("express")
const router =express.Router();
const {getallTicket,
    getTicketsByIdQuery,
    addTickets,
    updateTickets,
    DeleteTickets}=require("../controllers/ticketController")

router.get("/getallTicket",getallTicket);
router.get("/getTicketsByIdQuery/{ id }",getTicketsByIdQuery);
router.post("/addTickets/{ id }",addTickets);
router.put("/updateTickets/{ id }",updateTickets);
router.delete("/DeleteTickets/{ id }",DeleteTickets);

module.exports = router
