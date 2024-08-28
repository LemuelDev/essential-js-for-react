
// async and await 

const url = 'https://jsonplaceholder.typicode.com/todos/1'

// fetchPromise
// .then((response) => response.json()) 
// .then((response) => console.log(response))
// instead of these, we can use the async and await function


const fetchPromise = async () => {
    const res = await fetch(url);
    const response = await res.json();
    console.log(response);
};

fetchPromise()
// succesful
//  { userId: 1, id: 1, title: 'delectus aut autem', completed: false }



