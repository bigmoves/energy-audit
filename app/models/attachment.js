import DS from 'ember-data';

var File = DS.Model.extend({
  building: DS.belongsTo('building'),
  user: DS.belongsTo('user'),
  tags: DS.hasMany('tag'),
  name: DS.attr('string'),
  type: DS.attr('string'),
  size: DS.attr('number'),
  url: DS.attr('string'),
  filename: function() {
    return this.get('name') + '.' + this.get('type');
  }.property('name', 'type'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});

File.reopenClass({
  FIXTURES: [{
    id: 1,
    building: 1,
    user: 1,
    tags: [1],
    name: "Owner's Manual",
    type: 'pdf',
    size: 600,
    url: '/owners_manual.pdf',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id: 2,
    building: 1,
    user: 1,
    tags: [1],
    name: "Floor plan",
    type: 'pdf',
    size: 600,
    url: '/floor_plan.pdf',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id: 3,
    building: 1,
    user: 1,
    tags: [1],
    name: 'IMG_20140523_110704',
    type: 'jpg',
    size: 600,
    url: '/photos/IMG_20140523_110704.jpg',
    createdAt: new Date(),
    updatedAt: new Date()
  }]
});

export default File;
