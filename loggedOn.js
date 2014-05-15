
module.exports = function () {
  
  var Stem        = this,
      log         = this.log,
      bot         = this.bot,
      idleGames   = this.configs['stem-idler'].games,
      idleOnLogin = this.configs['stem-idler'].idleOnLogin;

  // Alert user if idleOnLogin is enabled
  if (idleOnLogin) log.info('[stem-idler] Idling is enabled');

  // Start idling games if enabled
  if (idleOnLogin) {

    log.info('[stem-idler] Idling:', idleGames);

    // Change idling state
    Stem.states.idling = true;

    // Idle games in plugin config
    bot.gamesPlayed(idleGames);

  }

};