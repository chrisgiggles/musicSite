import React from 'react';
import { Link } from 'react-router';
import Reflux from 'reflux';
import TrackStore from './../../stores/TrackStore.js';

class TrackListing extends React.Component {

    constructor() {
        super();
        this.state = {
            tracks: []
        };
        this.onFetchTrack = this.onFetchTrack.bind(this);
    }

    componentDidMount() {
        console.log('TrackListing has mounted');
        //this.unsubscribe = TrackStore.listen(() => this.setState({ data: TrackStore.fetchTracks() }) );
        this.unsubscribe = TrackStore.listen(this.onFetchTrack);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onFetchTrack(tracks) {
        console.log('Has fetched tracks from store and is setting state');
        this.setState({ tracks });
    }

    render() {
        console.log(this.state.tracks);
        const tracks = this.state.tracks.map((track, i) => {
            const artist = track.artist;
            const title = track.title;
            return (
                <li key={i}>{artist} - {title}</li>
            );
        });

        const loader = function() {
            return (<img src='assets/ajax-loader.gif'/>);
        }();

        return(
            <div className='main'>
                <ul>
                {this.state.tracks.length > 0 ? tracks : loader}
                </ul>
            </div>
        );
    }
}

export default TrackListing;