
module.exports = function (Stem) {

  var commands = require('./commands');

  /**
   * Register commands
   */
  
  Stem.api.addCommand('idle on', commands.idleOn, 1);

  Stem.api.addCommand('idle off', commands.idleOff, 1);

  /**
   * Register handlers
   */
  
  Stem.api.addHandler('bot', 'loggedOn', require('./loggedOn'));
  
};