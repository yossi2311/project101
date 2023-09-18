const express =require("express")
const router =express.Router();
const {getallAirlins,
    getAirlinsByIdQuery,
    addAirlines,
    updateAirlines,
    DeleteAirlines}=require("../controllers/airlineControlier")

router.get("/getallAirlins",getallAirlins);
router.get("/getAirlinsByIdQuery/{ id }",getAirlinsByIdQuery);
router.post("/addAirlines/{ id }",addAirlines);
router.put("/updateAirlines/{ id }",updateAirlines);
router.delete("/DeleteAirlines/{ id }",DeleteAirlines);

module.exports = router