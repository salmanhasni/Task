Template.messageItem.helpers({
    ownMessage: function () {
        return Meteor.userId() === this.userId;
    }
});


Template.messageItem.events({
    //To delete message
    'click .delete': function(event){
        var messageId = this._id;
        Meteor.call('removeMessage', messageId, function(){
            return Router.go('messagesList');
        });
    }
});