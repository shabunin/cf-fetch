CF.userMain = function () {
  CF.fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.dir(data);
    })
    .catch(function (err) {
      console.dir(err);
    })
};

var test = function (url) {
  CF.fetch(url)
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      CF.setJoin('s1', text);
      console.log('response', text);
    })
    .catch(function (error) {
      console.log('error', error);
      CF.setJoin('s2', error);
    });
};