Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() { return Meteor.subscribe('messages'); }
});

Router.route('/submit', {name: 'messageSubmit'});

Router.route('/', {name: 'messagesList'});


var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
    } else {
        this.next();
    }
}

Router.onBeforeAction(requireLogin, {only: 'messageSubmit'});