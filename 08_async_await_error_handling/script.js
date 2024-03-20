async function getUsers() {
  try {
    // const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
    const reponse = await fetch("https://httpstat.us/404"); // even if it gives status error, it will run the rest of the code which we don't want

    // that's why we throw error
    if (!reponse.ok) {
      throw new Error("Request Failed");
    }

    const data = await reponse.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// getUsers();

const getPosts = async () => {
  // const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
  const reponse = await fetch("https://httpstat.us/500");

  if (!reponse.ok) {
    throw new Error("Request Failed");
  }

  const data = await reponse.text();
  console.log(data);
};

getPosts().catch((error) => console.log(error));
