import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor('application').set('lastRoute', {
      name: 'buildings.index',
      model: null
    });
  },
  model: function() {
    return this.store.createRecord('building');
  },
  deactivate: function() {
    var model = this.get('controller.model');
    if(model.get('isNew')) {
      model.deleteRecord();
    }
  },
  actions: {
    save: function(model) {
      var _this = this;
      model.save().then(function() {
        _this.transitionTo('building.index', model);
      });
    },
    cancel: function() {
      this.transitionTo('buildings.index');
    }
  }
});
