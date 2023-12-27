async function getJson() {
  return await fetch("http://localhost:8000/db/ask?loc=patras")
    .then((response) => {
      return response.json();
    })
    // .then((jsonData) => {
    //   return ;
    // })
    .catch((error) => {
      // handle your errors here
      console.error(error);
    });
}

export default getJson;
