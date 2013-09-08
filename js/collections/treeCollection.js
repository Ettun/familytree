define([
	'backbone',
  	'treeModel'
], function (BackBone, treeModel) {
  var TreeCollection = Backbone.Collection.extend({
		model: treeModel,
		url: '/api/tree',
    }
  });
  return TreeCollection;
});