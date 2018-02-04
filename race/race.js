var raceData = require('./race.json');
var Races = (function(){
  var randomize = function() {};
  var find = function(name) {
    return raceData.filter(function(v) {
      return (v.name.strPos(name) !== -1);
    });
  };
  var all = function() {
    return raceData;
  };
})();
module.exports = Races;
