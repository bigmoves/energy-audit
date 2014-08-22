import Ember from 'ember';

export default Ember.Mixin.create({
  isAuthenticated: function() {
    //this.replaceWith('signin');
    /*
    var user = this.modelFor('application').get('user');

    if(!user) {
      this.replaceWith('signin');
    }
    */
  }
});
