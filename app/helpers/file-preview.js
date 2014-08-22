import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(file, options) {
  var icon = {
    //jpg: '<img src="' + file.get('url') + '" class="pull-left" style="height:' + options.hash.size +'px;">',
    jpg: '<i class="fa fa-file-image-o fa-2x pull-left"></i>',
    pdf: '<i class="fa fa-file-pdf-o fa-2x pull-left"></i>'
  };
  return new Handlebars.SafeString(icon[file.get('type')]);
});
