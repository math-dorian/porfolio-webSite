import React, { useState } from 'react';
import { Alert, Carousel, Button } from 'react-bootstrap';

const ViewMore = (props) => {
    const [show, setShow] = useState(false);

    if (show) {
        return(
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Carousel className="toogleProjects-grid">
                <Carousel.Item>
                    <img
                    src={props.slideOne}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    src={props.slideTwo}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    src={props.slideThree}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    src={props.slideFour}
                    alt="Fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    src={props.slideFive}
                    alt="Fifth slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Alert>
        );
    }
    return <Button onClick={() => setShow(true)}>Voir plus</Button>;
}

export default ViewMore;
