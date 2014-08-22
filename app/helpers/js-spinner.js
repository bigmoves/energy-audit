import Ember from 'ember';
import Spin from 'energy-audit/views/spin';

export default Ember.Handlebars.makeBoundHelper(function(size) {
  return Ember.Handlebars.helpers.view.call(this, Spin, size);
});
