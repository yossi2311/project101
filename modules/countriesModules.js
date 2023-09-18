const {knex} = require("./connections");

const getallCountries =async () => {
    const query1 =await knex.select().from("Countries")
    return (query1)    
}
    const getCountriesByIdQuery =async (id) => {
        const query1 =await knex.select().from("Countries")
        return (query1) 
    }

    const addCountries = async (Countries,res,req) => {
        const result = await knex("countries").insert(Countries);
        return result;}
        
        const updateCountries = async (Countries,res,req) => {
            const result = await knex("countries").update(Countries);
            return result;}
            
            const DeleteCountries= async (Countries,res,req) => {
                const result = await knex("countries").delete(Countries);
                return result;
        }
        module.exports={
            DeleteCountries,
            updateCountries,
            addCountries,
            getCountriesByIdQuery,
            getallCountries
        }
    