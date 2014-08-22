import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['application', 'building'],
  user: Ember.computed.readOnly('controllers.application.model.user'),
  comment: null,
  actions: {
    addComment: function(comment) {
      var space = this.get('model');
      var building = space.get('building');
      var user = this.get('user');
      var comment = this.store.createRecord('comment', {
        space: space,
        user: user,
        body: comment,
        createdAt: new Date()
      });
      var event = this.store.createRecord('event', {
        type: 'comment',
        payload: comment.toJSON(),
        user: user,
        building: building,
        createdAt: new Date()
      });

      comment.save().then(function(comment) {
        space.get('comments').pushObject(comment);
        return comment;
      }).then(function() {
        return event.save();
      }).then(function(event) {
        building.get('events').pushObject(event);
      });

      this.set('comment', null);
    }
  }
});
