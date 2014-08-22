import Ember from 'ember';
import S3Uploader from 'energy-audit/utils/s3-uploader';

var set = Ember.set;

Ember.FileField = Ember.TextField.extend({
  type: 'file',
  attributeBindings: ['multiple', 'style'],
  multiple: false,
  style: 'display:none;',
  change: function(e) {
    var input = e.target;
    if (!Ember.isEmpty(input.files)) {
      set(this, 'files', input.files);
    }
  }
});

export default Ember.FileField.extend({
  url: '/sign',

  file: null,

  filesDidChange: (function() {
    var _this = this;
    var uploadUrl = this.get('url');
    var files = this.get('files');

    var uploader = S3Uploader.create({
      url: uploadUrl
    });

    uploader.on('didUpload', function(response) {
      // S3 will return XML with url
      var uploadedUrl = $(response).find('Location')[0].textContent;
      uploadedUrl = unescape(uploadedUrl); // => http://yourbucket.s3.amazonaws.com/file.png
      _this.set('file', files[0]);
      _this.set('file.url', uploadedUrl);
    });

    if (!Ember.isEmpty(files)) {
      uploader.upload(files[0]); // Uploader will send a sign request then upload to S3
    }
  }).observes('files'),

  uploadController: function() {
    return this.container.lookup('controller:files/upload');
  }.property(),

  actions: {
    saveUrl: function(url) {
      debugger;
      this.sendAction('saveUrl', url);
    }
  }
});
