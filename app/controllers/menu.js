import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['building'],
  building: Ember.computed.readOnly('controllers.building.model'),
  showMenu: false,
  actions: {
    showMenu: function() {
      this.toggleProperty('showMenu');
    }
  }
});
