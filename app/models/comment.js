import DS from 'ember-data';

var Comment = DS.Model.extend({
  user: DS.belongsTo('user'),
  equipment: DS.belongsTo('equipment'),
  space: DS.belongsTo('space'),
  attachment: DS.belongsTo('attachment'),
  body: DS.attr('string'),
  createdAt: DS.attr('date')
});

Comment.reopenClass({
  FIXTURES: [{
    id: 1,
    user: 1,
    equipment: 1,
    body: 'This unit is old. May have a hard time finding documentation.',
    createdAt: new Date()
  }, {
    id: 2,
    user: 1,
    equipment: 1,
    body: 'Talked to the facility manager and found this unit only operates on weekdays.',
    createdAt: new Date()
  }]
});

export default Comment;
