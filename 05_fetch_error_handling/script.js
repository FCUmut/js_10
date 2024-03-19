// Successful status
// fetch("https://httpstat.us/200")
//   .then((res) => {
//     return res;
//   })
//   .then(() => console.log("success"));

// Fetch.catch() won't run on status errors
// fetch("https://httpstat.us/404")
//   .then((res) => {
//     return res;
//   })
//   .then(() => console.log("success"))
//   .catch((error) => {
//     console.log(error);
//   });

// Fetch.catch() runs on a network error
// fetch("https://hello123456.net")
//   .then((res) => {
//     return res;
//   })
//   .then(() => console.log("success"))
//   .catch((error) => {
//     console.log(error);
//   });

// we can check if status is ok
// fetch("https://httpstat.us/404")
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error("Request Failed");
//     }
//     return res;
//   })
//   .then(() => console.log("success"))
//   .catch((error) => {
//     console.log(error);
//   });

// or we can check status specifically
fetch("https://httpstat.us/404")
  .then((res) => {
    if (!res.status === 404) {
      throw new Error("Not Found");
    } else if (res.status === 500) {
      throw new Error("Server Error");
    } else if (res.status !== 200) {
      throw new Error("Request Failed");
    }
    return res;
  })
  .then(() => console.log("success"))
  .catch((error) => {
    console.log(error);
  });
