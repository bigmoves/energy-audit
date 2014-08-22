import Ember from 'ember';
import AuthenticatedRoute from 'energy-audit/routes/authenticated';

export default Ember.Route.extend(AuthenticatedRoute, {
  redirect: function() {
    //this.isAuthenticated();
  }
});
