import React from 'react';
import Reflux from 'reflux';
import TrackStore from './../../stores/TrackStore.js';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            tracks: []
        };
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.unsubscribe = TrackStore.listen(this.onChange);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onChange(tracks) {
        this.setState({ tracks });
    }

    render() {
        console.log(this.state.tracks);
        const tracks = this.state.tracks.map((track, i) => {
            const artist = track.artist;
            const title = track.title;
            return (
                <h1 key={i}>{artist} - {title}</h1>
            );
        });

        return(
            <div className="base">
                <header>EightOhEight</header>
                <div className="main">
                    {tracks}
                </div>
                <footer>Copyright 2015</footer>
            </div>
        );
    }

}

export default App;