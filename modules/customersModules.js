const {knex} = require("./connections");

const getallCustomers = async () => {
    const query1 =await knex.select().from("customers")
    return (query1)
}

const getCustomersByIdQuery =async (id) => {
    const query1 =await knex.select().from("customers")
    return (query1)
}

const addCustomers = async (Customers,res,req) => {
    const result = await knex("customers").insert(Customers);
    return result;
}
    const updateCustomers  = async (Customers,res,req) => {
        const result = await knex("customers").update(Customers);
        return result;
    }
        
        const DeleteCustomers = async (Customers,res,req) => {
            const result = await knex("customers").delete(Customers);
            return result;
    }
    module.exports={
        DeleteCustomers,
        updateCustomers,
        addCustomers,
        getCustomersByIdQuery,
        getallCustomers
        }





