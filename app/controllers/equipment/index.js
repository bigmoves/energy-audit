import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['application', 'building'],
  user: Ember.computed.readOnly('controllers.application.model.user'),
  comment: '',
  actions: {
    addComment: function(comment) {
      var equipment = this.get('model');
      var building = equipment.get('building');
      var user = this.get('user');

      var comment = this.store.createRecord('comment', {
        equipment: equipment,
        user: user,
        body: comment
      });

      /*
      var event = this.store.createRecord('event', {
        type: 'comment',
        payload: comment.toJSON(),
        user: user,
        building: building,
        createdAt: new Date()
      });
      */

      comment.save().then(function(comment) {
        return equipment.get('comments').addObject(comment);
      }).then(function() {
        equipment.save();
      });
      /*
        return comment;
      }).then(function() {
        return event.save();
      }).then(function(event) {
        building.get('events').pushObject(event);
      });
      */

      this.set('comment', '');
    }
  }
});
