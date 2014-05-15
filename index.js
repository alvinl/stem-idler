
module.exports = function (Stem) {

  var bot = Stem.bot;
  
  Stem.utils.addHandler(bot, 'loggedOn', require('./loggedOn'));

  Stem.utils.addHandler(bot, 'friendMsg', require('./friendMsg'));
  
};