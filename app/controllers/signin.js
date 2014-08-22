import Ember from 'ember';

export default Ember.Controller.extend({
  reset: function() {
    this.set('email', null);
    this.set('password', null);
  }.on('init'),

  actions: {
    signIn: function() {
      var credentials = this.getProperties('email', 'password'),
          controller = this;

      Ember.$.ajax('/login', {
        type: 'POST',
        data: credentials
      }, function(data) {
        var authToken = data.access_token;
        document.cookie = "auth_token=" +  authToken;
        controller.reset();
        controller.transitionTo('index');
      });
    }
  }
});
