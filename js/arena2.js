
define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){
        Person = Backbone.Model.extend({
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
            
            var michael = new Person({ name: "Michael Bluth", age: 32});
            michael.children("George Michael");

            var gob = new Person({ name: "Gob Bluth", age: 35});
            gob.children("Steve Holt");

            var familyList = Backbone.Collection.extend({
                model: Person,
                comparator: 'age',
                age: function() {
                 return this.where({age: 32})
                },
                initialize: function() {
                    console.log(this.length);
                }
            });

            var family = new familyList;

            console.log(family.age());

            var familyView = Backbone.View.extend({
                el: "#familyapp",

                events: {
                    "dblclick .member-template" : "addOne"
                },


                initialize: function() {
                    var inside = this.$('.member-template');
                    this.listenTo(family, 'add', this.addOne);
                },

                render: function() {
                    this.$('.generation').html("<div class='member-template'> </div>");
                    console.log('added');
                    return this;
                },

                addOne: function() {
                    var view = new familyView({model: Person});
                    this.$("#familyapp").append(view.render().el);
                },

                remove: function() {
                    var inside = this.$('.member-template');
                    inside.hide();
                }
            })

            var AppView = new familyView;
            
            $(document).keypress(function(e) {
            	var code = (e.keyCode ? e.keyCode : e.which);
            	console.log(code);
            	switch(code) {
            	case 27: // Enter key.
        		break;
        		case 32: // Spacebar.
        		console.log ('me so happy');
        		break;
        	}
        });
});
