import Ember from 'ember';

export default Ember.Controller.extend({
  reset: function() {
    this.set('name', null);
    this.set('email', null);
    this.set('password', null);
  }.on('init'),

  actions: {
    signUp: function() {
      var credentials = this.getProperties('name', 'email', 'password'),
          controller = this;

      Ember.$.ajax('/signup', {
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
