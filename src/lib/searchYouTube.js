var searchYouTube = ({ key, query, max = 5 }, callback) => {

  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    type: 'video',
    key: key,
    q: query,
    maxResults: max,
    videoEmbeddable: true
  })
    .done((data) => {
      console.log(data.items);
      callback(data.items);
    })
    .fail(error => {
      console.error('SEARCH FAILED', error);
    });
};

export default searchYouTube;
