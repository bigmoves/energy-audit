import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(type) {
  var types = {
    update: 'posted an update',
    comment: 'commented on',
    equipment: 'added equipment',
    space: 'added a space',
    attachment: 'uploaded a file',
    building: 'created the building'
  };

  return types[type];
});
