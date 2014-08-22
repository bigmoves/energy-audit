import DS from 'ember-data';

var Event = DS.Model.extend({
  type: DS.attr('string'),
  user: DS.belongsTo('user'),
  payload: DS.attr(),
  building: DS.belongsTo('building'),
  createdAt: DS.attr('date'),
  ref: function() {
    if (this.get('payload.equipment')) {
      this.set('refType', 'equipment');
      return this.store.find('equipment', this.get('payload.equipment'));
    } else if (this.get('payload.space')) {
      this.set('refType', 'space');
      return this.store.find('space', this.get('payload.space'));
    }
  }.property('payload'),
  refId: function() {
    return this.get('payload')[this.get('refType')];
  }.property('refType')
});

// Event types: update, equipment, space, attachment, comment

Event.reopenClass({
  FIXTURES: [{
    id: 1,
    type: 'comment',
    payload: {
      id: 2,
      user: 1,
      equipment: 1,
      body: 'Talked to the facility manager and found this unit only operates on weekdays.',
      createdAt: new Date()
    },
    user: 1,
    building: 1,
    createdAt: new Date()
  }]
});

export default Event;
