function Ship(length) {
  return {
    length: length,
    hits: 0,
    hit() {
      if (this.isSunk()) {
        return "you monster, it is a warcrime";
      }
      this.hits++;
    },
    isSunk() {
      return this.hits === this.length;
    },
  };
}

module.exports = { Ship };
