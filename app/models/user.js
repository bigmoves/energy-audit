import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  buildings: DS.hasMany('building'),
  events: DS.hasMany('event')
});

User.reopenClass({
  FIXTURES: [{
    id: 1,
    name: 'Chad Miller',
    email: 'chadtmiller15@gmail.com',
    buildings: [1],
    events: [1]
  }]
});

export default User;
