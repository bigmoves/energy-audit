import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    var equipment = this.modelFor('equipment');
    this.controllerFor('application').set('lastRoute', {
      name: 'equipment.index',
      model: equipment
    });
  },
  model: function() {
    return this.modelFor('equipment');
  },
  deactivate: function() {
    var model = this.get('controller.model');
    model.rollback();
  },
  actions: {
    save: function(model) {
      var _this = this;
      model.save().then(function() {
        _this.transitionTo('equipment.index', model);
      });
    },
    cancel: function(model) {
      this.transitionTo('equipment.index', model);
    }
  }
});
