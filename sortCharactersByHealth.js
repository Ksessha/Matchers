function sortCharactersByHealth(characters) {
    return [...characters].sort((a, b) => b.health - a.health);
  }
  
  module.exports = sortCharactersByHealth;