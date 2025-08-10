import { useEffect, useState } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function ProductDetail({id}){
    const [product, setProduct] = useState({});
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
        const fetchProduct = async () =>{
            setLoading(true);
            fetch(`https://fakestoreapi.com/products/${id}`)
                .then((response) => {
                    if(!response.ok)
                        throw new Error(`Http code. status ${response.status}`);
                    return response.json();
                })
                .then((data)=>{
                    setProduct(data);
                    console.log(data);
                    setLoading(false);
                })
                .catch(error => {
                    setError(error.message)
                    setLoading(false);
                })
        }


        fetchProduct();
    },[id])

    
    if(loading){
        return <div className="text-center mt-4">
            <Spinner animation="border"/>
        </div>
    }

    if(error) return <p>Error: {error}</p>

    return(
        <>
            <div style={{float:'right'}} >
                <button className="btn btn-primary mb-3" onClick={()=> navigate(-1)}>Go back</button>
                <button className="btn btn-primary mb-3" onClick={()=> navigate('/')}>Go back</button>

            </div>
            <Card className="p-3">
                <Row>
                    <Col md={5}>
                        <Card.Img src={product.image}
                            alt={product.title}
                            style={{objectFit:'contain', height:'300px'}}
                        />
                    </Col>
                    <Col md={7}>
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text className="text-muted">Category: {product.category} </Card.Text>
                            <Card.Text className="flex-grow-1"> ${product.price} </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </>
    )

}