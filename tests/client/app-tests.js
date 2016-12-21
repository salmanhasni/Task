const assert = require('assert');

describe('Client Task', function() {

    beforeEach(function() {
        Messages.insert({content: "tests content", author: "salman", submitted: new Date(), userId: 123123});
    });

    it('insert adding data from client', function() {
        // VERIFY
        var count = Messages.find({}).count();
        assert(1 === count);
    });
});