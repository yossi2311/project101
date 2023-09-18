const {knex} = require("./connections");

const getallAirlines =async (req , res) => {
    const query1 =await knex.select().from("airlines")
    return (query1)
}

    const getAirlinsByIdQuery =async (id) => {
        const query1 =await knex.select().from("airlines")
    return (query1)
}
    const addAirlines = async (airlines) => {
        const result = await knex("airlines").insert(airlines);
        return result;
    }
    const updateAirlines = async (id) => {
        const result = await knex("airlines").where(id.airlines.id).update(airlines);
        return result;}
        
        const DeleteAirlines = async (id) => {
            const result = await knex("airlines").where(id.airlines.id).delete(airlines);
            return result;
    }
    module.exports={
        DeleteAirlines,
        updateAirlines,
        addAirlines,
        getAirlinsByIdQuery,
        getallAirlines
    }

