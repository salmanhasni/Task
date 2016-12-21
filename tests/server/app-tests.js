const assert = require('assert');

describe('Server Task', function() {

    beforeEach(function() {
        Messages.insert({content: "tests content", author: "salman", submitted: new Date(), userId: 123123});
    });

    it('removing message', function() {
        // VERIFY
        Messages.remove({});
        var count = Messages.find({}).count();
        assert(0 === count);
    });
});