import React from 'react';
import { Button} from "react-bootstrap";
import { Link } from 'react-router-dom';
import {faHouse } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../style/Navigation.css';

const Navigation = () => {
    return (
        <div className='nav'>
            <ul>
                <li>
                    <Button variant="outline-secondary" size="lg" href="/" active >
                        <FontAwesomeIcon icon={faHouse} />
                    </Button>
                </li>
                <li>
                    <Button variant="outline-secondary" size="lg" href="/newgame" active >
                        <span>New Game</span>
                    </Button>
                </li>
                <li>
                    <Button variant="outline-secondary" size="lg" href="/statistics" active >
                        <span>Statistics</span>
                    </Button>
                </li>
            </ul>
        </div>
    );
};
export default Navigation;