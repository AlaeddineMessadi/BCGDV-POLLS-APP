// get id from question url
const helper = {
  idExtractor: (url) => {
    return url.split('/').pop(-1);
  },

  totalVotesExtractor: (items) => {
    return items ? items.reduce((acc, { votes }) => acc + votes, 0) : 0;
  },

  percentCalc: (value, total) => {
    return Math.floor((value / total) * 100);
  }
}

export default helper;