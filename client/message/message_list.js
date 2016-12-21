Template.messagesList.helpers({
    message: function() {
        return Messages.find({}, {sort: {submitted: 1}});
    }
});
