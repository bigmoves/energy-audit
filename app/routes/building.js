import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('building', params.building_id);
  },
  deactivate: function() {
    var buildingController = this.controllerFor('building'),
        applicationController = this.controllerFor('application');

    applicationController.set('lastBuilding', buildingController.get('model'));
    buildingController.set('model', null);
  }
});
