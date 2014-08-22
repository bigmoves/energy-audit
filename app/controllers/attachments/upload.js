import Ember from 'ember';

var readOnly = Ember.computed.readOnly;

export default Ember.Controller.extend({
  needs: ['building'],
  currentBuilding: readOnly('controllers.building.model'),
  file: null,

  observeFile: function() {
    var _this = this;
    var currentBuilding = this.get('currentBuilding');
    var selectedFile = this.get('file');

    var file = this.store.createRecord('attachment', {
      building: currentBuilding,
      name: selectedFile.name,
      type: selectedFile.type,
      url: selectedFile.url,
      size: selectedFile.size
    });

    file.save().then(function() {
      currentBuilding.get('attachments').addObject(file);
      return currentBuilding.save();
    }).then(function() {
      _this.transitionToRoute('building.index', currentBuilding);
    }, function(error) {
      console.log(error);
    });

  }.observes('file'),

  actions: {
    triggerUpload: function() {
      $('.ember-text-field').trigger('click');
    }
  }
});
