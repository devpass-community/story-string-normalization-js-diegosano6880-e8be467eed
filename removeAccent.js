function removeAccent(str) {
  return str.normalize('NFD').replace(/\p{Diacritic}/gu, '');
}

module.exports = removeAccent;
