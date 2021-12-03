import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <Nav>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/question" className="nav-link">Question</Link>
            <Link to="/about" className="nav-link">About</Link>


                
            </Nav>
        )
    }
}
