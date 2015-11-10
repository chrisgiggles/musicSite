import Reflux from 'reflux';
import request from 'superagent';
import TrackActions from './../actions/TrackActions.js';
import valsArray from './../utils/valsArray.js';

const TrackStore = Reflux.createStore({
    self: this,
    listenables: [TrackActions],
    trackList: [],
    apiUrl: 'http://localhost:5000/',

    init: function() {
        this.fetchTracks();
    },

    fetchTracks: function() {
        function getTracks(err, res) {
            if (err) throw err;
            this.trackList = valsArray(res.body);
            this.trigger(this.trackList);
        }
        request('GET', 'http://localhost:5000/').end(getTracks.bind(this));
    }
});

export default TrackStore;