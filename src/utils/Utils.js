
const helper = {
  // get id from question url
  idExtractor: (url) => {
    return url.split('/').pop(-1);
  },

  // get total votes 
  totalVotesExtractor: (items) => {
    return items ? items.reduce((acc, { votes }) => acc + votes, 0) : 0;
  },

  // Percentage Calculator
  percentCalc: (value, total) => {
    const percentage = Math.floor((value / total) * 100);
    return !isFinite(percentage) ? 0 : percentage;
  }
}

export default helper;