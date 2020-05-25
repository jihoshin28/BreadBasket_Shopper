import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <ul className ="" >
                    <li className = 'nav'><Link to = '/'>About</Link></li>
                    <li className = 'nav'><Link to = '/works'>Works</Link></li>
                    <li className = 'nav'><Link to = '/contact'>Contact</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navbar
