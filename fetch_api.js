
// fetch api is used to fetch data from the backend and retrieve the necessary data the frontend needed.


const url = 'https://jsonplaceholder.typicode.com/todos/1'

const fetchPromise = fetch(url);

fetchPromise
.then(() => console.log('succesful'))
.catch(() => console.log('failed'));



const thePromise = fetch (url);

thePromise
.then((response) => response.json()) /* pending the data */
.then((response) => console.log(response)) /* receive the response and the orignal value of the api */
// returning the json body of the response.
// chaining of response and promises.

