import DS from 'ember-data';

/*
DS.JSONSerializer.reopen({
  serializeHasMany: function(record, json, relationship) {
    var key = relationship.key;
    var payloadKey = this.keyForRelationship ? this.keyForRelationship(key, "hasMany") : key;
    var relationshipType = DS.RelationshipChange.determineRelationshipType(record.constructor, relationship);
    var relationshipTypes = ['manyToNone', 'manyToMany', 'manyToOne'];

    if (relationshipTypes.indexOf(relationshipType) > -1) {
      json[payloadKey] = Ember.A(record.get(key)).mapBy('id');
    }
  }
});

export default DS.FixtureAdapter.extend();
*/

export default DS.ActiveModelAdapter.extend({
  host: 'http://localhost:3000'
});
