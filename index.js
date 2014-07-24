
module.exports = function (Stem) {
  
  Stem.api.addHandler('bot', 'loggedOn', require('./loggedOn'));

  Stem.api.addHandler('bot', 'friendMsg', require('./friendMsg'));
  
};