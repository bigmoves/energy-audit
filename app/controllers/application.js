import Ember from 'ember';

export default Ember.Controller.extend({
  lastBuilding: null,
  lastRoute: null,
  isLoggedOut: Ember.computed.match('currentPath', /(signin|signup|forgotten|reset)/)
});
