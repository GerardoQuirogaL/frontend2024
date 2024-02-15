const ListItem =({nombre, teléfono, email})=>{
    return(
        <li>
            {nombre}:
            <ul>
                <li>teléfono{teléfono}</li>
                <li>Correo{email}</li>
            </ul>
        </li>
    )
}

export default ListItem