const {knex} = require("./connections");

const getallFlights = async() => {
    const query1 =await knex.select().from("flights")
    return (query1)

}
    const getFlightByIdQuery = async (id) => {
        const query2 = await knex.raw (`select * from Flights where id = ${id}`);
        result(query2)
    }
    
    const addFlight = async (Flight,res,req) => {
        const result = await knex("flights").insert(Flight);
        return result;
    }
        const updateFlights = async (Flights,res,req) => {
            const result = await knex("flights").update(Flights);
            return result;
        }
            const DeleteFlights= async (Flights,res,req) => {
                const result = await knex("flights").delete(Flights);
                return result;
        }

        module.exports={
            DeleteFlights,
            updateFlights,
            addFlight,
            getFlightByIdQuery,
            getallFlights
        }
        