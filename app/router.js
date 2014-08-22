import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EnergyAuditENV.locationType
});

Ember.Route.reopen({
  activate: function() {
    window.scrollTo(0, 0);
  }
});

Router.map(function() {
  this.route('signin');
  this.route('signup');
  this.resource('buildings', function() {
    this.route('new');
    this.resource('building', {path: '/:building_id'}, function() {
      this.route('edit');
      this.route('map');
      this.resource('equipments', function() {
        this.route('new');
        this.resource('equipment', {path: '/:equipment_id'}, function() {
          this.route('edit');
        });
      });
      this.resource('attachments', function() {
        this.route('upload');
        //this.route('attachment', {path: '/:attachment_id'});
        //this.route('edit', {path: '/:attachment_id/edit'});
        this.resource('attachment', {path: '/:attachment_id'}, function() {
          this.route('edit');
        });
      });
      this.resource('spaces', function() {
        this.route('new');
        this.resource('space', {path: '/:space_id'}, function() {
          this.route('edit');
        });
      });
    });
  });
});

export default Router;
