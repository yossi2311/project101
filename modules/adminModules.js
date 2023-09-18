const{knex}=require("./connections")

// Function  for the admin  tables




const getallAdmin =async () => { 
    const query1 =await knex.select().from
    return (query1)
    }
    // Function for get an the admin by id 

    const getAdminByIdQuery =async (id) => {
        const query1 =await knex.select().from("adminstrators")
        return (query1)
        }
    // Function for add admins

    const addAdminstrators = async (Adminstrators) => {
        const result = await knex("adminstrators").insert(Adminstrators);
        return result;
    }
        // Function for update admins

        const updateAdminstrators  = async (Adminstrators) => {
            const result = await knex("adminstrators").where({Id:Adminstrators.id}).update(Adminstrators)
            return result;
    }
            // Function for delete admins

    const DeleteAdminstrators = async (id) => {
                const result = await knex("adminstrators").where({Id:id}).del() 
                return result;
        }

        module.exports={
            DeleteAdminstrators,
            updateAdminstrators,
            addAdminstrators,
            getAdminByIdQuery,
            getallAdmin
        }



