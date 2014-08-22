import DS from 'ember-data';

var Equipment = DS.Model.extend({
  building: DS.belongsTo('building'),
  space: DS.belongsTo('space'),
  comments: DS.hasMany('comment'),
  name: DS.attr('string'),
  location: DS.attr('string'),
  manufacturer: DS.attr('string'),
  size: DS.attr('string'),
  quantity: DS.attr('number'),
  modelNumber: DS.attr('string'),
  serialNumber: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});

Equipment.reopenClass({
  FIXTURES: [{
    id: 1,
    building: 1,
    space: 1,
    comments : [1,2],
    name: 'AHU-1',
    location: 'rooftop',
    manufacturer: 'Trane',
    size: '100 tons',
    quantity: 1,
    modelNumber: '',
    serialNumber: ''
  }]
});

export default Equipment;
