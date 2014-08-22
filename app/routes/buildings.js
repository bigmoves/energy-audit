import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.render('nav', {outlet: 'nav'});
  },
  model: function() {
    return this.store.find('building');
  }
});
