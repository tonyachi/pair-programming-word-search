const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  let verticalJoin = '';
  for (let i = 0; i < letters[0].length; i++) {
    for (let j = 0; j < letters.length; j++) {     
      verticalJoin = verticalJoin + letters[j][i];  
    }
  }
  if (verticalJoin.includes(word)) return true;
  return false;
};

module.exports = wordSearch;