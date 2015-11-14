import React from 'react';
import { Link } from 'react-router';
//Components

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <header>
                {this.props.title}
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/tracks'>List all tracks</Link></li>
                </ul>
            </header>
        );
    }
}

React.propTypes = {
    title: React.PropTypes.string
};

export default Header;