import DS from 'ember-data';

var Me = DS.Model.extend({
  buildings: DS.hasMany('building'),
  user: DS.belongsTo('user'),
  createdAt: DS.attr('date'),
  authenticationToken: DS.attr('string'),
  hasBuildings: function() {
    return this.get('buildings.length') > 0;
  }.property('buildings.length')
});

Me.reopenClass({
  find: function(store) {
    $.getJSON('/me.json', function(data) {
      var id = data.me.user_id;
      data.me.id = id;
      store.pushPayload('me', data);
      return store.find('me', id);
    }, function(error) {
      throw new Error("Me#find failed: status=%@, responseText=%@".fmt(error.status, error.responseText));
    });
  },
  FIXTURES: [{
    id: 1,
    buildings: [1],
    user: 1
  }]
});

export default Me;
