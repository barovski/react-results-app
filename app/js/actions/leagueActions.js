var AppDispatcher = require('../dispatcher/appDispatcher');
var LeagueConstants = require('../constants/leagueEventConstants');

module.exports = {
  select: function(val) {
    AppDispatcher.handleViewAction({
      actionType: LeagueConstants.TODO_CHANGE_LEAGUE,
      data: val
    });
  }
};