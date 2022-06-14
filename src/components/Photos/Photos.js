import React, { Component } from 'react'
import { Container, Card, Row, Col, Spinner } from 'react-bootstrap'
import './Photos.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
export class Photos extends Component {

    constructor(props) {
        super(props)
        this.state = {
            photos: [

            ]
        }
    }
    async componentDidMount() {
        // axios.get('https://picsum.photos/v2/list')
        // .then((res) => this.setState({
        //     photos : res.data
        // }))
        // .catch((err) => console.log(err.message))

        try{
            let res = await axios.get('https://picsum.photos/v2/list')
            this.setState(
                {
                    photos:res.data
                }
            )
        } catch(err){
            console.log(err.message)
        }
    }

    render() {
         let { photos } = this.state
       let spinnerDiv={
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            height:"90vh"
        }
        return (
            <div>
                <Container style={{ marginTop: '20px' }}>
                    <h1 className="display-4">Photos</h1>
                    <p className="lead">Explore range of images from Unsplash</p>
                    <hr></hr>
                    <Row>
                        {photos.length?photos.map((photo, index) => (
                            <Col md={4} className="photos-card" key={index}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={photo.download_url} alt="img" />
                                    <Card.Body>
                                        <Card.Title>{photo.author}</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <a className='btn btn-dark' href={photo.url} style={{marginRight:'10px'}}>View</a>
                                        <Link className='btn btn-dark' to={`/Photos1/${photo.id}`}>View enlarged</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )) : <div style={spinnerDiv}><Spinner animation="grow" /></div>}

                    </Row>
                </Container>
            </div>
        )
    }
}

export default Photos