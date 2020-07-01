import React, {Component} from 'react';
import { Jumbotron, Button } from 'reactstrap';


class Header extends React.Component {
    render () {
        const {
        logged_in,
        sign_in_route,
        sign_out_route
        } = this.props

        return (
            <>
                <Jumbotron className="bg_image_container">
                    <h1 className="display-3">Connecting Communities</h1>
                    <h1 className="display-3">Through Food</h1>
                    <Button className="btn1" href="#">Give Food</Button>
                    <Button className="btn2" href='#'>Need Food</Button>
                </Jumbotron>
        </>
        );
    }
} 
    export default Header;