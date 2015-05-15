var AppDispatcher = require('../dispatcher/appDispatcher');
var LeagueTableConstants = require('../constants/leagueTableEventConstants');

module.exports = {
  select: function(val) {
    AppDispatcher.handleViewAction({
      actionType: LeagueTableConstants.TODO_CHANGE_LEAGUE,
      data: val
    });
  }
};