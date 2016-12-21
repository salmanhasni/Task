Messages.allow({
    insert: function(userId, message) {
        return ownDocument(userId, message);
    },
    remove: function(userId, message) {
        return ownDocument(userId, message);
    }
});

Meteor.methods({
    removeMessage: function (messageId) {
        check(Meteor.userId(), String);
        check(messageId, String);

        var message = Messages.findOne({_id: messageId});

        if(message.userId === Meteor.userId()) {
            Messages.remove({_id: messageId});
        }
    }
});