import React, {Component} from 'react';
import { Jumbotron, Button } from 'reactstrap';
import AboutUs from './AboutUs';


import bgimage from '../images/Gmas_kitchen_bg_image_300.png';


class Header extends React.Component {
    render () {
        const {
        logged_in,
        sign_in_route,
        sign_out_route
        } = this.props


        return (
            <>
                <Jumbotron style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}>
                    <h1 className="display-3">Connecting Communities</h1>
                    <h1 className="display-3">Through Food</h1>
                    <Button className="btn2" href="/users/sign_up">Become a Member</Button>
                </Jumbotron>
                <AboutUs />
              
        </>
        );
    }
} 
    export default Header;