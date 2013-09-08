define('treeModelView', [
    'jquery',
    'backbone',
    'mustache',
    'text!templates/search/primitive.html'
], function ($, Backbone, mustache, treeTemplate) {
    var TreeModelView = Backbone.View.extend({
        tagName: 'div',
        // The DOM events specific to an item.
        events: {
            'click .leaf': 'toggleTree'
        },
        initialize: function () {
            this.listenTo(this.model, 'change:included', this.render);
            this.listenTo(this.model, 'change:count', this.render);
        },
        render: function () {
            var rendered = mustache.to_html(treeTemplate, this.model.toJSON());
            this.$el.html(rendered);
            return this;
        },
        toggleTree: function (e) {
            this.model.toggleIncluded();
        }
    });
    return TreeModelView;
});