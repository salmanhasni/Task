Template.messageSubmit.events({
    'submit form': function(event) {
        event.preventDefault();

        user = Meteor.user();

        var message = {
            content: $(event.target).find('[name=content]').val(),
            submitted: new Date(),
            userId: Meteor.userId(),
            author: user.username
        };

        Messages.insert(message);

        Router.go('messagesList');

    }
});