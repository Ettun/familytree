define('treeModelView', [
    'jquery',
    'backbone',
    'mustache',
    'treeModel',
    'treeCollection',
    'text!templates/search/primitive.html'
], function ($, Backbone, mustache, treeModel, treeCollection, treeTemplate) {
    var TreeModelView = Backbone.View.extend({
        tagName: 'div',
        el: "#familyapp",
        // The DOM events specific to an item.
        events: {
            'click .member-template': 'toggleTree'
        },
        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },
        render: function () {
            var rendered = mustache.to_html(treeTemplate, this.model.toJSON());
            this.$el.html(rendered);
            return this;
        },
        toggleTree: function (e) {
            var inside = this.$('.member-template');
            inside.hide();
        }
    });
    return TreeModelView;
});