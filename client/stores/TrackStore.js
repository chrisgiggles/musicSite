import Reflux from 'reflux';
import request from 'superagent';
import TrackActions from './../actions/TrackActions.js';
import valsArray from './../utils/valsArray.js';

const TrackStore = Reflux.createStore({
    listenables: [TrackActions],
    trackList: [],
    apiUrl: 'http://localhost:5000/',

    init: function() {
        console.log('Listenables -->', this.listenables);
        this.fetchTracks();
    },

    fetchTracks: function() {
        request('GET', 'http://localhost:5000/').end( (err, res) => {
            if (err) throw err;
            this.trackList = valsArray(res.body);
            this.trigger(this.trackList);
        });
    }
});

export default TrackStore;