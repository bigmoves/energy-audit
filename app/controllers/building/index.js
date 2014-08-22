import Ember from 'ember';

export default Ember.Controller.extend({
  addingEquipment: false,

  showMap: function() {
    return typeof google === 'object';
  }.property(),

  actions: {

    toggleMap: function() {
      this.toggleProperty('showMap');
    },

    addEquipment: function() {
      this.set('addingEquipment', true);
    },

    cancelEquipment: function() {
      this.set('addingEquipment', false);
    },

    saveEquipment: function() {
      //this.set('addingEquipment', true);
    }
  }
});
