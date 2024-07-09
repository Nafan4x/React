import { useParams } from "react-router"
import {GetProductById} from '../services/prodService.js';
import {DronItem} from '../Components/DronItem.js';

export function DronPage() {
    const params= useParams();
    console.log(params);
    const {data, loading, error} = GetProductById(params.id);
    console.log(data);
    return(
        <DronItem/>
    )
}