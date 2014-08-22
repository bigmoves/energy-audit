import Ember from 'ember';
import AuthenticatedRoute from 'energy-audit/routes/authenticated';

export default Ember.Route.extend(AuthenticatedRoute, {
  redirect: function() {
    //this.isAuthenticated();
  },
  renderTemplate: function(controller, model) {
    this._super(controller, model);
    this.render('menu', {outlet: 'menu'});
  },
  deactivate: function() {
    this.controllerFor('menu').set('showMenu', false);
  },
  actions: {
    destroyRecord: function(model) {
      var _this = this;
      model.destroyRecord().then(function() {
        _this.transitionTo('buildings.index');
      });
    },
    transitionToEvent: function(event) {
      this.transitionTo(event.get('refType'), event.get('refId'));
    }
  }
});
