import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Fetch(){

    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        setLoading(true);

        fetch('https://fakestoreapi.com/products')
            .then((response) => {
                if(!response.ok)
                    throw new Error(`Http code. status ${response.status}`);
                return response.json();
            })
            .then((data)=>{
                setData(data);
                console.log(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message)
                setLoading(false);
            })

    },[])

    const DisplayProducts = () => {
        return(
            <Container>
                <h2>Our products</h2>
                <Row>
                    {data.map(d =>(
                        <Col key = {d.id} xs={12} sm={6} md={2} >
                            <Card className="h-100 shadow-sm">
                                <Card.Img variant="top" src={d.image} style={{height:'200px', objectFit:'cover'}} />
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title>{d.title}</Card.Title>
                                    <Card.Text className="flex-grow-1"> {d.price} </Card.Text>
                                    <Button variant="primary">Add to cart</Button>
                                    <Link to={`/product/${d.id}`}>View detail</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        )
    }

    if(loading){
        return <div className="text-center mt-4">
            <Spinner animation="border"/>
        </div>
    }

    if(error) return <p>Error: {error}</p>

    return(
        <>
            <div>
               <DisplayProducts />
            </div>
        </>
    )
}