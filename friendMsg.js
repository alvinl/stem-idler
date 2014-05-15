
module.exports = function (steamID, rawMessage, messageType) {
  
  var Stem         = this,
      bot          = this.bot,
      command      = rawMessage.toLowerCase(),
      pluginConfig = this.configs['stem-idler'],
      isAdmin      = this.utils.isAdmin(steamID);

  // Ignore `is typing` messages
  if (messageType === 2) return;

  // Command: idle <on / off>
  if (command === 'idle on' && isAdmin || command === 'idle off' && isAdmin) {

    var idleState = (command === 'idle on');

    if (idleState === Stem.states.idling) {

      return bot.sendMessage(steamID, 'Idling is already ' + ( (idleState) ? 'on' : 'off') );

    }

    // Change idling state
    Stem.states.idling = idleState;

    // Change the bots idling games
    bot.gamesPlayed(( (idleState) ? pluginConfig.games : [] ));

    bot.sendMessage(steamID, 'Idling has been turned ' + ( (idleState) ? 'on' : 'off') );

  }

};