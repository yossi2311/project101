const express =require("express")
const router =express.Router();
const {getallCountries,
    getCountriesByIdQuery,
    addCountries,
    updateCountries,
    DeleteCountries}= require("../controllers/countriesController")

router.get("/getallCountries",getallCountries);
router.get("/getCountriesByIdQuery/{ id }",getCountriesByIdQuery);
router.post("/addCountries/{ id }",addCountries);
router.put("/updateCountries/{ id }",updateCountries);
router.delete("/DeleteCountries/{ id }",DeleteCountries);


module.exports = router
