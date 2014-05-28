
module.exports = function (Stem) {

  var bot = Stem.bot;
  
  Stem.api.addHandler(bot, 'loggedOn', require('./loggedOn'));

  Stem.api.addHandler(bot, 'friendMsg', require('./friendMsg'));
  
};