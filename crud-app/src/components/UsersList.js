import React from "react";

const UsersList = ({user, users, setUser, setListUpdated}) =>{

    const handleDelete = id =>{
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:3000/api/users/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListUpdated(true)
    }

    let{name, firstLastName, secondLastName, email} = user

    const handleUpdate = id =>{

        var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        //Validación
        if( name=== "" || firstLastName==="" || secondLastName === "" || email===""){
            alert('Todos los campos son obligatorios.')
            return
        } else if(!(validEmail.test(email) ) ){
            alert('Ingresa un correo valido.')
            return 
        } 
        const requestInit = {
            method: 'PUT',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(user)
        }
        fetch('http://localhost:3000/api/users/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //Reinicia el estado del libro
        setUser({
            name:'',
            firstLastName:'',
            secondLastName:'',
            email:''
        })

        setListUpdated(true)
    }

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
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.firstLastName}</td>
                    <td>{user.secondLastName}</td>
                    <td>{user.email}</td>
                    <td>
                        <div className="mb-3">
                            <button onClick={() => handleUpdate(user.id)} className="btn btn-dark">Actualizar</button>
                        </div>
                        <div className="mb-3">
                            <button onClick={() => handleDelete(user.id)} className="btn btn-danger">Eliminar</button>
                        </div>
                    </td>
                </tr> 

                ))}
                
            </tbody>
        </table>
    )
}

export default UsersList;