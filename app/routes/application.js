import Ember from 'ember';
import Me from 'energy-audit/models/me';

export default Ember.Route.extend({
  model: function() {
    //return this.store.find('me', 1);
    return Me.FIXTURES[0];
  }
  /*
  model: function() {
    return Me.find(this.get("store"));
  }
  */
});
