import {Component} from 'react'
import {Button, Form} from "react-bootstrap";


class Reservation extends Component {

    state = {}


    render() {

        // name
        // phone
        // number of people
        // have allergies?
        //date and time
        //textarea special request

        return (

            <>
                <Form>
                    <Form.Group controlId="name">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name"/>
                    </Form.Group>

                    <Form.Group controlId="Phone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="number" placeholder="Enter your phone"/>
                    </Form.Group>

                    <Form.Group  controlId="numberofpeople">
                        <Form.Check type="checkbox" label="Enter number of people"/>
                    </Form.Group>

                    <Form.Group  controlId="smoking">
                        <Form.Check type="checkbox" id="smoking" label="Smoking"/>
                    </Form.Group>





                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </>

        )
    }
}

export default Reservation
