import DS from 'ember-data';

var Building = DS.Model.extend({
  users: DS.hasMany('user'),
  collaborators: DS.hasMany('user'),
  spaces: DS.hasMany('space'),
  equipments: DS.hasMany('equipment'),
  attachments: DS.hasMany('attachment'),
  events: DS.hasMany('event'),
  name: DS.attr('string'),
  description: DS.attr('string'),
  spaceType: DS.attr('string'),
  address: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  zipcode: DS.attr('number'),
  area: DS.attr('number'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});

Building.reopenClass({
  FIXTURES: [{
    id: 1,
    users: [1],
    collaborators: [],
    spaces: [1],
    equipments: [1],
    attachments: [1,2,3],
    events: [1],
    name: 'Empire State Building',
    description: 'A tall building',
    address: '350 5th Ave',
    city: 'New York',
    state: 'NY',
    zipcode: 10118,
    area: 87120,
    spaceType: 'Office'
  }]
});

export default Building;
