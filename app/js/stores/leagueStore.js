var AppDispatcher = require('../dispatcher/appDispatcher');
var LeagueConstants = require('../constants/leagueEventConstants');
var Events = require('../events');
var restApi = require('../services/service');

var CHANGE_EVENT = 'change',
    _id = '354';

var LeagueStore = {

  getLeagues: function() {
    return restApi.getLeagues();
  },

  getFixtures: function() {
    return restApi.getResults(_id);
  },

  getTeams: function() {
    return restApi.getTeams(_id);
  },

  getMatchday: function() {
    return restApi.getMatchday(_id);
  },

  getLeagueId: function () {
    return _id;
  },

  getStandings: function() {
    return restApi.getTable(_id);
  },

  getScorers: function() {
    return restApi.getScorers(_id);
  },

  emitChange: function() {
    this.trigger(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.off(CHANGE_EVENT, callback);
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    var action = payload.action;
    var text;

    switch(action.actionType) {
      case LeagueConstants.TODO_CHANGE_LEAGUE:
        data = action.data.trim();
        if (data !== '') {
          _id = data;
          LeagueStore.emitChange();
        }
        break;
    }

    return true; // No errors. Needed by promise in Dispatcher.
  })
};

//extend leagueTabelStore with Events lib (got it from durandal)
Events().includeIn(LeagueStore);

module.exports = LeagueStore;