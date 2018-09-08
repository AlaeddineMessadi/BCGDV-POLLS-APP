// get id from question url
const helper = {
  idExtractor: (url) => {
    return url.split('/').pop(-1);
  }
}

export default helper;