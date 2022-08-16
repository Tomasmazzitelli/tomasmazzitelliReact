import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const r = useParams() // es un hook que se actualiza si estas en el mismo componente y cambia la url y siempre da un objeto a cambio
    //const navigate = useNavigate()

    /* useEffect(() => {})
    
    useEffect(() => {},[])

    useEffect(() => {},[r.id]) */

    useEffect(()=>{
       /*  fetch("")
        .then(()=>{
            navigate("/algunaurl")
        })
        .catch(()=>{
            console.log("error")
        }) */
    })

    return (
        <div>ItemDetailContainer</div>
    )
}


export default ItemDetailContainer