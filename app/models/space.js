import DS from 'ember-data';

var Space = DS.Model.extend({
  building: DS.belongsTo('building'),
  equipments: DS.hasMany('equipment'),
  comments: DS.hasMany('comment'),
  name: DS.attr('string'),
  area: DS.attr('number')
});

Space.reopenClass({
  FIXTURES: [{
    id: 1,
    building: 1,
    equipments: [1],
    comments: [1],
    name: 'Office-1',
    area: 10280
  }]
});

export default Space;
