define([
	'backbone',
], function (BackBone) {
  var treeModel = Backbone.Model.extend({
		defaults: {
        	name: "Unknown Bluth",
        	age: 0,
            spouse: "None"
        },
        initialize: function(){

            if( !this.get('children') ) {
                this.set({children : new Array()})
            };

            if( !this.get('siblings') ) {
                this.set({siblings : new Array()})
            }
            
        },
        children: function(child) {
            var individual = this.get("children");
            var index = individual.indexOf(child);
            if (index == -1) {
                this.get("children").push(child);
            } else {
                individual.splice(index, 1);
            };
        }
  });
  return treeModel;
});