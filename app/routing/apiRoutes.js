var friends = require('../data/friends.js');

module.exports = function(app){
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req, res) {
        var newbie = req.body;
        friends[Object.keys(friends)[0]].push(newbie);
        res.json(newbie);
    })
}
