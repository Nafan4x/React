import { useParams } from "react-router"
import {GetProductById} from '../services/prodService.js';

export function DronPage() {
    const params= useParams();
    console.log(params);
    const {data, loading, error} = GetProductById(params.id);
    console.log(data);
    return(
        
        <div>
            Дрон № {params.id} ебать его в рот!
        </div>
    )
}