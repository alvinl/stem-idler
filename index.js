
module.exports = function (stem) {

  var pluginConfig = stem.config.idler || {},
      idleGames    = pluginConfig.games || [];

  /**
   * Register command
   */

  stem.api.addCommand(/^idle (\w+)$/, function (steamID, command) {

    var validStates  = ['on', 'off'],
        idleState    = command.match[1];

    // Invalid command syntax
    if (!~validStates.indexOf(idleState))
      return stem.bot.sendMessage(steamID, 'Syntax: idle <on / off>');

    else if (idleState === 'on' && stem.states.isIdling ||
            idleState === 'off' && !stem.states.isIdling)
      return stem.bot.sendMessage(steamID, 'Idling is already %idleStatus.'
                                            .replace('%idleStatus', stem.states.isIdling ? 'enabled' : 'disabled'));

    stem.states.isIdling = !stem.states.isIdling;
    stem.bot.gamesPlayed(stem.states.isIdling ? idleGames : []);
    stem.bot.sendMessage(steamID, 'Idling has been %idleStatus.'
                                  .replace('%idleStatus', stem.states.isIdling ? 'enabled' : 'disabled'));

  });

  /**
   * Register handler
   */

  stem.api.addHandler('bot', 'loggedOn', function () {

    if (!pluginConfig.idleOnLogin)
      return;

    stem.log.info('[Idler] Idling games');
    stem.states.idling = true;
    stem.bot.gamesPlayed(idleGames);

  });

};
