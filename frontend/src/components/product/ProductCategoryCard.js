import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';

class ProductCategoryCard extends Component {

    buttonHandler = (e) => {
        const { history } = this.props;
        if (this.props.title === 'GPU'){
            history.push('/gpu');
            window.location.reload()
        }
        else if (this.props.title === 'CPU'){
            alert("This page will be available soon")
        }
        else if (this.props.title === 'RAM'){
            alert("This page will be available soon")
        }
        else {
            console.log("error navigating");
        }
    }

    render() {
        // const { history } = this.props;
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Img 
                variant="top" 
                src= {this.props.image} 
                style = {{
                    width: 250,
                    height: 250,
                    objectFit: 'cover',
                }}
            />
            <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text style = {{
                    whiteSpace: 'pre-wrap'
                }}>
                {this.props.text}
                </Card.Text>
                <Button variant="primary" onClick={(event) => this.buttonHandler(event)}>Check Price</Button>
            </Card.Body>
            </Card>
        );
    }
    
}

export default withRouter(ProductCategoryCard);