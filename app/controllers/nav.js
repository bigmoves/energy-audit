import Ember from 'ember';

var readOnly = Ember.computed.readOnly;
var match = Ember.computed.match;
var bool = Ember.computed.bool;
var not = Ember.computed.not;

export default Ember.Controller.extend({
  needs: ['application', 'building', 'equipments'],

  showMenu: false,
  currentUser: readOnly('controllers.application.model.user'),
  isLoggedIn: bool('currentUser'),
  isLoggedOut: readOnly('controllers.application.isLoggedOut'),
  lastRoute: readOnly('controllers.application.lastRoute'),
  currentBuilding: readOnly('controllers.building.model'),
  lastBuilding: readOnly('controllers.application.lastBuilding'),
  currentPath: readOnly('controllers.application.currentPath'),
  cantGoBack: match('currentPath', /(signin|signup|forgotten|reset|buildings.index)/),
  canGoBack: not('cantGoBack'),

  labels: {
    'buildings.building.index': 'Buildings',
    'buildings.building.map': 'Buildings',
    'buildings.building.edit': 'Back',
    'buildings.building.spaces.index': 'Buildings',
    'buildings.building.spaces.space.edit': 'Back',
    'buildings.building.spaces.space.index': 'Spaces',
    'buildings.building.equipments.index': 'Buildings',
    'buildings.building.equipments.equipment.edit': 'Back',
    'buildings.building.equipments.equipment.index': 'Equipments',
    'buildings.building.attachments.index': 'Buildings',
    'buildings.building.attachments.upload': 'Attachments'
  },

  backLabel: function() {
    return this.labels[this.get('currentPath')] || 'Back';
  }.property('currentPath'),

  actions: {

    goBack: function(label) {
      var lastRoute;
      if (label === 'Back') {
        lastRoute = this.get('lastRoute');
        if (!lastRoute.model) {
          return this.transitionToRoute(lastRoute.name);
        }
        return this.transitionToRoute(lastRoute.name, lastRoute.model);
      }
      this.transitionTo(label.toLowerCase() + '.index');
    },

    showMenu: function() {
      console.log('showMenu');
      this.toggleProperty('showMenu');
    },

    signOut: function() {
      document.cookie = "auth_token=";
      this.transitionTo('signin');
    }
  }
});
