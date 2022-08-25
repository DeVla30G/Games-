import React from 'react';
import logo from '../../src/logo.png';
import {Button, Navbar, Col, Container, Form, Row, Nav, NavDropdown, InputGroup} from "react-bootstrap";
import Navigation from '../components/Navigation';
import '../style/Home.css'

const HomePage = () => {
    return (
        <div className='home-bloc'>
            <Navigation/>
                <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
            Tic Tac Toe
            </h1>
            </div>
        </div>
    
    );
};

export default HomePage;