import Ember from 'ember';
import States from 'energy-audit/utils/states';
import SpaceTypes from 'energy-audit/utils/space-types';

export default Ember.ObjectController.extend({
  states: Ember.A(States),
  selectedState: null,
  spaceTypes: Ember.A(SpaceTypes),
  selectedSpaceType: null
});
