require.config({

//  enforceDefine: true,

    paths: {
        jquery: 'vendor/jquery',
        underscore: 'vendor/underscore',
        backbone: 'vendor/backbone',
        mustache: 'vendor/mustache',
        text: 'vendor/text',
        modernizr: 'vendor/modernizr-2.6.2.min',
        treeModel: 'models/treeModel',
        treeCollection: 'collections/treeCollection',
        treeModelView: 'views/treeModelView'
    },

    shim: {
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
    }
});

define([
    'jquery',
    'underscore',
    'backbone',
    'text',
    'treeModel',
    'treeCollection',
    'treeModelView'
], function($, _, Backbone, text, treeModel, treeCollection, treeModelView){

    var michael = new treeModel({ name: "Michael Bluth", age: 32});
    michael.children("George Michael");

    var gob = new treeModel({ name: "Gob Bluth", age: 35});
    gob.children("Steve Holt");

    var familyCollection = new treeCollection;

    console.log(treeCollection.length);

    var AppView = new treeModelView({ model: michael });
    
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
    })
});
