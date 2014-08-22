import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    var space = this.modelFor('space');
    this.controllerFor('application').set('lastRoute', {
      name: 'space.index',
      model: space
    });
  },
  model: function() {
    return this.modelFor('space');
  },
  deactivate: function() {
    var model = this.get('controller.model');
    model.rollback();
  },
  actions: {
    save: function(model) {
      var _this = this;
      model.save().then(function() {
        _this.transitionTo('space.index', model);
      });
    },
    cancel: function(model) {
      this.transitionTo('space.index', model);
    }
  }
});
