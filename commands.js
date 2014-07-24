
exports.idleOn = function (client) {
  
  var Stem         = this,
      pluginConfig = this.configs['stem-idler'];

  if (Stem.states.idling)
    return Stem.bot.sendMessage(client, 'Idling is already enabled');

  Stem.states.idling = true;

  Stem.bot.gamesPlayed(pluginConfig.games);

  Stem.bot.sendMessage(client, 'Idling has been enabled');

};

exports.idleOff = function (client) {
  
  var Stem = this;

  if (!Stem.states.idling)
    return Stem.bot.sendMessage(client, 'Idling is already disabled');

  Stem.states.idling = false;

  Stem.bot.gamesPlayed([]);

  Stem.bot.sendMessage(client, 'Idling has been disabled');

};