(function() {

  /**
    Handles routes related to viewing email logs.

    @class AdminEmailLogsRoute    
    @extends Discourse.Route
    @namespace Discourse
    @module Discourse
  **/
  Discourse.AdminEmailLogsRoute = Discourse.Route.extend({
    model: function() {
      return Discourse.EmailLog.findAll();
    }
  });

}).call(this);
