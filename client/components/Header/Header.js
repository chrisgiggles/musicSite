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
                    <li><Link to='/'>List all</Link></li>
                    <li><Link to='/add'>Add</Link></li>
                </ul>
            </header>
        );
    }
}

React.propTypes = {
    title: React.PropTypes.string
};

export default Header;