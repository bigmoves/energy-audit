import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('building').get('spaces');
  }
});
