var friends = require('../data/friends.js');

module.exports = function(app){
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req, res) {
        var newbie = req.body;
        var friendsList = friends[Object.keys(friends)[0]];
        friendsList.push(newbie);
        res.json(newbie);

        function add(a,b){
            return a + b;
        }
        var newbieResponse = newbie.scores;
        var compareNewbie = [];

        for(var x=0;x<friendsList.length-1;x++){
            var comparison = [];
            for(var i = 0; i<newbieResponse.length;i++){
                if((newbieResponse[i] - friendsList[x].scores[i])<0){
                    comparison.push((newbieResponse[i] - friendsList[x].scores[i])*-1);
                } else {
                    comparison.push((newbieResponse[i] - friendsList[x].scores[i]));
                }
            }
            var totalScore = comparison.reduce(add);
            compareNewbie.push(totalScore);
        }
        console.log(compareNewbie);
        var bestMatch = Math.min.apply(null, compareNewbie); 
        console.log(bestMatch);           
    })
};
