(function() {

  /**
    Handles routes related to users.

    @class AdminUserRoute    
    @extends Discourse.Route
    @namespace Discourse
    @module Discourse
  **/
  Discourse.AdminUserRoute = Discourse.Route.extend({
    model: function(params) {
      return Discourse.AdminUser.find(params.username);
    }
  });

}).call(this);
