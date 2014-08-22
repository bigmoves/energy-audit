import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function(controller, model) {
    this._super(controller, model);
    this.render('menu', {outlet: 'menu'});
  },
  deactivate: function() {
    this.controllerFor('menu').set('showMenu', false);
  }
});
