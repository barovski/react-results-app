var AppDispatcher = require('../dispatcher/appDispatcher');
var LeagueTableConstants = require('../constants/leagueTableConstants');

module.exports = {
  select: function(val) {
    AppDispatcher.handleViewAction({
      actionType: LeagueTableConstants.TODO_CHANGE_LEAGUE,
      data: val
    });
  }
};