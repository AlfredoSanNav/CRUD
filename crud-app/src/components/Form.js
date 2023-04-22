import React from "react";

const Form = ({user, setUser}) =>{

    const handleChange = e =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    let{name, firstLastName, secondLastName, email} = user

    const handleSubmit = () =>{
        var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        //Validación
        if( name=== "" || firstLastName==="" || secondLastName === "" || email===""){
            alert('Todos los campos son obligatorios.')
            return
        } else if(!(validEmail.test(email) ) ){
            alert('Ingresa un correo valido.')
            return 
        } else {
            //Consulta
            const requestInit = {
                method: 'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify(user)
            }
            fetch('http://localhost:3000/api/users', requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

            //Reinicia el estado del libro
         setUser({
                        name:'',
                        firstLastName:'',
                        secondLastName:'',
                        email:''
                    })

        }

        

        
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input value={name} name="name" onChange={handleChange} type="text" id="name" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="firstLastName" className="form-label">Primer Apellido</label>
                <input value={firstLastName} name="firstLastName" onChange={handleChange} type="text" id="firstLastName" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="secondLastName" className="form-label">Segundo Apellido</label>
                <input value={secondLastName} name="secondLastName" onChange={handleChange} type="text" id="secondLastName" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo</label>
                <input value={email} name="email" onChange={handleChange} type="text" id="email" className="form-control"/>
            </div>

            <button type="submit" className="btn btn-primary">Agregar</button>
        </form>
    )
}

export default Form;