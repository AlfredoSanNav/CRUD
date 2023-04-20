import React from "react";

const UsersList = ({users}) =>{
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombres</th>
                    <th>Primer apellido</th>
                    <th>Segundo apellido</th>
                    <th>Correo</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user =>(
                <tr key={user.id}>
                    <th>{user.id}</th>
                    <th>{user.name}</th>
                    <th>{user.firstLastName}</th>
                    <th>{user.secondLastName}</th>
                    <th>{user.email}</th>
                </tr> 

                ))}
                
            </tbody>
        </table>
    )
}

export default UsersList;