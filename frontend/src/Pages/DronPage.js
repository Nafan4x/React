import { useParams } from "react-router"


export function DronPage() {
    const params= useParams();
    console.log(params);
    return(
        <div>
            Дрон № {params.id} ебать его в рот!
        </div>
    )
}