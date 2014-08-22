import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    var building = this.modelFor('building');
    this.controllerFor('application').set('lastRoute', {
      name: 'building.index',
      model: building
    });
  },
  model: function() {
    return this.modelFor('building');
  },
  deactivate: function() {
    var model = this.get('controller.model');
    model.rollback();
  },
  actions: {
    save: function(model) {
      var _this = this;
      model.save().then(function() {
        _this.transitionTo('building.index', model);
      });
    },
    cancel: function(model) {
      this.transitionTo('building.index', model);
    }
  }
});
