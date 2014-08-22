import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor('application').set('lastRoute', {
      name: 'equipments.index',
      model: null
    });
  },
  model: function() {
    return this.store.createRecord('equipment');
  },
  deactivate: function() {
    var model = this.get('controller.model');
    model.rollback();
  },
  actions: {
    save: function(model) {
      var _this = this;
      model.set('building', this.modelFor('building'));
      model.save().then(function() {
        _this.transitionTo('equipment.index', model);
      });
    },
    cancel: function() {
      this.transitionTo('equipments.index');
    }
  }
});
