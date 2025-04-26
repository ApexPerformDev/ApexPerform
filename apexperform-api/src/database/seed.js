import { query } from "./sqlite.js"

async function seedRoles() {
    const roles = ["Admin", "CS", "Gestor", "Cliente"];

    for (const role of roles){
        const roleExist = await query("SELECT id_role FROM user_role WHERE role_name = ?", [role]);

        if (roleExist.lengtt === 0){
            await query("INSERT INTO user_role (role_name) VALUES (?)", [role]);
        } 
    }
}

seedRoles();