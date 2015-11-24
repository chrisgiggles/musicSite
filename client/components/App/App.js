import React from 'react';
//Components
import Header from './../Header/Header.js';
import Footer from './../Footer/Footer.js';

class App extends React.Component {

    constructor() {
        super();
    }

    render() {

        return(
            <div className='base'>
                <Header title='Todo App'/>
                {console.log('Props -->', this.props.children)}
                { this.props.children }
                <Footer/>
            </div>
        );
    }
}

export default App;