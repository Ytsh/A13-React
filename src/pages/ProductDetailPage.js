import { useParams } from "react-router-dom"
import { ProductDetail } from "../components/ProductDetail";

export function ProductDetailPage(){
    const {id} = useParams();
    return(
        <>
            <ProductDetail id={id}/>
        </>
    )
}