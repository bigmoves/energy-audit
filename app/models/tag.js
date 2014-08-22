import DS from 'ember-data';

var Tag = DS.Model.extend({
  name: DS.attr('string'),
  color: DS.attr('string')
});

Tag.reopenClass({
  FIXTURES: [{
    id: 1,
    name: 'AHU-1',
    color: ''
  }]
});

export default Tag;
