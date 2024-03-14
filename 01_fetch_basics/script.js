// window.fetch(); // fetch is available on window object
//fetch();

// XMLHttpRequest is old school AJAX call, fetch api is modern way to fetch data, the big difference between them is fetch api returns a promise and XHR uses callback functions.

// Fetching a JSON file
fetch("./movies.json")
  .then((response) => {
    //console.log(response);
    // prints
    /* ...status:200
    statusText:"OK"... */

    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

// Fetching a text file
fetch("./test.txt")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    console.log(data);
  });

// Fecthing from an API
fetch("https://api.github.com/users/FCUmut/repos")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
