var AppDispatcher = require('../dispatcher/appDispatcher');
var LeagueTableConstants = require('../constants/leagueTableConstants');
var Events = require('../events');
var restApi = require('../services/service');

var CHANGE_EVENT = 'change',
    _id = '354';

var LeagueTableStore = {

  getLeagues: function() {
    return restApi.getLeagues();
  },

  getStandings: function() {
    return restApi.getTable(_id);
  },

  emitChange: function() {
    this.trigger(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.off(CHANGE_EVENT, callback);
    _id = '354';
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    var action = payload.action;
    var text;

    switch(action.actionType) {
      case LeagueTableConstants.TODO_CHANGE_LEAGUE:
        data = action.data.trim();
        if (data !== '') {
          _id = data;
          LeagueTableStore.emitChange();
        }
        break;
    }

    return true; // No errors. Needed by promise in Dispatcher.
  })
};

//extend leagueTabelStore with Events lib (got it from durandal)
Events().includeIn(LeagueTableStore);

module.exports = LeagueTableStore;