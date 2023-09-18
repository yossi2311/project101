const express =require("express")
const router =express.Router()
const  
{getallAdmin,
    getAdminByIdQuery,
    addAdminstrators,
    updateAdminstrators,
    DeleteAdminstrators} = require("../controllers/adminController")




router.get("/getallAdmin",getallAdmin);
router.get("/getAdminByIdQuery/{ id }",getAdminByIdQuery);
router.post("/addAdminstrators/{ id }",addAdminstrators);
router.put("/updateAdminstrators/{ id }",updateAdminstrators);
router.delete("/DeleteAdminstrators/{ id }",DeleteAdminstrators);



module.exports=router


