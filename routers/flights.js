const express =require("express")
const router =express.Router();
const {getallFlights,
    getFlightByIdQuery,
    addFlight,
    updateFlights,
    DeleteFlights}=require("../controllers/flightsController")

router.get("/getallFlights",getallFlights);
router.get("/getFlightByIdQuery/{ id }",getFlightByIdQuery);
router.post("/addFlight/{ id }",addFlight);
router.put("/updateFlights/{ id }",updateFlights);
router.delete("/DeleteFlights/{ id }",DeleteFlights);

module.exports = router
