const express =require("express")
const router =express.Router();
const {getallCustomers,
    getCustomersByIdQuery,
    addCustomers,
    updateCustomers,
    DeleteCustomers}=require("../controllers/customersController")

router.get("/getallCustomers",getallCustomers);
router.get("/getCustomersByIdQuery/{ id }",getCustomersByIdQuery);
router.post("/addCustomers/{ id }",addCustomers);
router.put("/updateCustomers/{ id }",updateCustomers);
router.delete("/DeleteCustomers/{ id }",DeleteCustomers);

module.exports = router
